import { useHistory, useLocation } from "react-router-dom";
import queryString, { ParsedQuery, ParseOptions } from "query-string";
import { useCallback, useEffect, useState } from "react";
import { checkValue } from "../assets/js/helpers";

const parseOption: ParseOptions = { arrayFormat: "comma" };

export type HasValue = (key: string | string[] | undefined | null, value: string) => boolean;
export type ToggleValue<A = string> = (key: A, value: string, toggle?: boolean) => void;
export type GetValue<A = string> = (key: A) => string[];
export type SetValue<A = string> = (key: A, value: string | string[]) => void;
export type GetValues<A = string> = (keys: A[]) => ParsedQueryR;
export type DeleteValue<A = string> = (key: A) => void;
export type PushQuery = (query: ParsedQuery) => void;

export interface ParsedQueryR {
  [key: string]: string[];
}

interface UseQueryR<T> {
  hasValue: HasValue;
  toggleValue: ToggleValue<T>;
  getValue: GetValue<T>;
  setValue: SetValue<T>;
  getValues: GetValues<T>;
  deleteValue: DeleteValue<T>;
  defaultValue: string[];
}

const useQuery = <T extends string, A extends T = T>(defaultKey?: A): UseQueryR<T> => {
  const history = useHistory();
  const location = useLocation();
  const [queries, setQueries] = useState<ParsedQuery>({});
  const [defaultValue, setDefaultValue] = useState<string[]>([]);

  const pushQuery: PushQuery = useCallback(
    (query) => {
      history.push({ search: queryString.stringify(query, parseOption) });
    },
    [history]
  );

  const hasValue: HasValue = useCallback((key, value) => {
    if (!key) return false;
    return Array.isArray(key) ? key.includes(value) : key === value;
  }, []);

  const getValue: GetValue<T> = useCallback(
    (key) => {
      return checkValue(queries[key]) || [];
    },
    [queries]
  );

  const getValues: GetValues<T> = useCallback(
    (keys) => {
      return keys.reduce((acc, cur) => {
        const value = checkValue(queries[cur]);
        return value ? { ...acc, [cur]: value } : acc;
      }, {});
    },
    [queries]
  );

  const setValue: SetValue<T> = useCallback(
    (key, value) => {
      pushQuery({ ...queries, [key]: value });
    },
    [queries, pushQuery]
  );

  const deleteValue: DeleteValue<T> = useCallback(
    (key) => {
      const queryCopy = { ...queries };
      delete queryCopy[key];
      pushQuery(queryCopy);
    },
    [queries, pushQuery]
  );

  const toggleValue: ToggleValue<T> = useCallback(
    (key, value, toggle = true) => {
      const keyParam = queries[key];
      const query = hasValue(keyParam, value);
      if (!query) {
        if (Array.isArray(keyParam)) {
          setValue(key, [...keyParam, value]);
        } else if (keyParam) {
          setValue(key, [keyParam, value]);
        } else {
          setValue(key, value);
        }
      } else if (toggle) {
        if (Array.isArray(keyParam)) {
          setValue(
            key,
            keyParam.filter((item) => item !== value)
          );
        } else {
          deleteValue(key);
        }
      }
    },
    [queries, hasValue, setValue, deleteValue]
  );

  useEffect(() => {
    setQueries(queryString.parse(location.search, parseOption));
  }, [location]);

  useEffect(() => {
    if (defaultKey) {
      setDefaultValue(getValue(defaultKey));
    }
  }, [getValue, defaultKey]);

  return {
    setValue,
    toggleValue,
    hasValue,
    getValue,
    getValues,
    deleteValue,
    defaultValue,
  };
};

export { useQuery };
