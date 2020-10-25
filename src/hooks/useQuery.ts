import { useHistory, useLocation } from "react-router-dom";
import queryString, { ParsedQuery, ParseOptions } from "query-string";

const queryOptions: ParseOptions = { arrayFormat: "comma" };

type HasKeyValueType = (key: string | string[] | undefined | null, value: string) => boolean;
type QueryToggleType = (key: string, value: string, toggle?: boolean) => void;
type GetKeyValeuType = (key: string) => string | string[];
type QueryPushType = (key: string, value: string | string[]) => void;

interface IUseQueryReturn {
  hasKeyValue: HasKeyValueType;
  queryToggle: QueryToggleType;
  getKeyValues: GetKeyValeuType;
  queryPush: QueryPushType;
}

const useQuery = (): IUseQueryReturn => {
  const history = useHistory();
  const location = useLocation();
  const queries: ParsedQuery = queryString.parse(location.search, queryOptions);

  console.log("ERROR HERE!");

  const hasKeyValue: HasKeyValueType = (key, value) => {
    if (!key) return false;
    if (typeof key === "string") {
      return key === value;
    }
    return key.includes(value);
  };

  const queryPush: QueryPushType = (key, value) => {
    history.push({
      search: queryString.stringify(
        {
          ...queries,
          [key]: value,
        },
        queryOptions
      ),
    });
  };

  const getKeyValues = (key: string): string | string[] => {
    return queries[key] || [];
  };

  const queryRemove = (key: string) => {
    delete queries[key];
    history.push({
      search: queryString.stringify(queries, queryOptions),
    });
  };

  const queryToggle: QueryToggleType = (key, value, toggle = false) => {
    const keyParam = queries[key];
    const query = hasKeyValue(keyParam, value);
    if (!query) {
      if (Array.isArray(keyParam)) {
        queryPush(key, [...keyParam, value]);
      } else {
        queryPush(key, value);
      }
    } else if (toggle) {
      if (Array.isArray(keyParam)) {
        queryPush(
          key,
          keyParam.filter((item) => item !== value)
        );
      } else {
        queryRemove(key);
      }
    }
  };

  return {
    queryPush,
    queryToggle,
    hasKeyValue,
    getKeyValues,
  };
};

export { useQuery };
