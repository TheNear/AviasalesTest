import { useHistory, useLocation } from "react-router-dom";
import queryString, { ParsedQuery, ParseOptions } from "query-string";
import { useCallback, useEffect, useState } from "react";

const queryOptions: ParseOptions = { arrayFormat: "comma" };

export type HasKeyValueType = (key: string | string[] | undefined | null, value: string) => boolean;
export type QueryToggleType = (key: string, value: string, toggle?: boolean) => void;
export type GetKeyValueType = (key: string) => string[];
export type QueryPushType = (key: string, value: string | string[]) => void;
export type GetKeysValuesType = (keys: string[]) => GetKeysValuesReturnType;
export type QueryRemoveType = (key: string) => void;

export interface GetKeysValuesReturnType {
  [key: string]: string[];
}

interface IUseQueryReturn {
  hasKeyValue: HasKeyValueType;
  queryToggle: QueryToggleType;
  getKeyValues: GetKeyValueType;
  changeKeyValue: QueryPushType;
  getKeysValues: GetKeysValuesType;
  queryRemove: QueryRemoveType;
  defValue: string[];
}

export type UseQueryType = (defKey?: string) => IUseQueryReturn;

/**
 * Custom hook which allows work with URL query more comfortable
 * @param defKey default key wich value you want to get every update
 */

const useQuery: UseQueryType = (defKey) => {
  const history = useHistory();
  const location = useLocation();
  const [queries, setQueries] = useState<ParsedQuery>({});
  const [defValue, setDefValue] = useState<string[]>([]);

  const hasKeyValue: HasKeyValueType = useCallback((key, value) => {
    if (!key) return false;
    if (typeof key === "string") {
      return key === value;
    }
    return key.includes(value);
  }, []);

  const changeKeyValue: QueryPushType = useCallback(
    (key, value) => {
      history.push({
        search: queryString.stringify(
          {
            ...queries,
            [key]: value,
          },
          queryOptions
        ),
      });
    },
    [history, queries]
  );

  const getKeyValues: GetKeyValueType = useCallback(
    (key) => {
      const keyValue = queries[key];
      if (keyValue) {
        return Array.isArray(keyValue) ? keyValue : [keyValue];
      }
      return [];
    },
    [queries]
  );

  const getKeysValues: GetKeysValuesType = useCallback(
    (keys) => {
      const keyValueObj: GetKeysValuesReturnType = {};
      keys.forEach((key) => {
        const keyValue = queries[key];
        if (keyValue) {
          keyValueObj[key] = Array.isArray(keyValue) ? keyValue : [keyValue];
        }
      });
      return keyValueObj;
    },
    [queries]
  );

  const queryRemove: QueryRemoveType = useCallback(
    (key) => {
      const queryCopy = { ...queries };
      delete queryCopy[key];
      history.push({
        search: queryString.stringify(queryCopy, queryOptions),
      });
    },
    [queries, history]
  );

  const queryToggle: QueryToggleType = useCallback(
    (key, value, toggle = true) => {
      const keyParam = queries[key];
      const query = hasKeyValue(keyParam, value);
      if (!query) {
        if (Array.isArray(keyParam)) {
          changeKeyValue(key, [...keyParam, value]);
        } else if (keyParam) {
          changeKeyValue(key, [keyParam, value]);
        } else {
          changeKeyValue(key, value);
        }
      } else if (toggle) {
        if (Array.isArray(keyParam)) {
          changeKeyValue(
            key,
            keyParam.filter((item) => item !== value)
          );
        } else {
          queryRemove(key);
        }
      }
    },
    [queries, hasKeyValue, changeKeyValue, queryRemove]
  );

  useEffect(() => {
    setQueries(queryString.parse(location.search, queryOptions));
  }, [location]);

  useEffect(() => {
    if (defKey) {
      setDefValue(getKeyValues(defKey));
    }
  }, [getKeyValues, defKey]);

  return {
    changeKeyValue,
    queryToggle,
    hasKeyValue,
    getKeyValues,
    getKeysValues,
    queryRemove,
    defValue,
  };
};

export { useQuery };
