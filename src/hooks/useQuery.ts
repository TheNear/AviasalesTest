import { useHistory, useLocation } from "react-router-dom";
import queryString, { ParsedQuery, ParseOptions } from "query-string";

const queryOptions: ParseOptions = { arrayFormat: "comma" };

// type QueryActionType<T> = (key: string, value: string) => T;
type IsHasParamType = (key: string | string[] | undefined | null, value: string) => boolean;
type ParamToggleType = (key: string, value: string, toggle: boolean) => void;

interface IUseQueryReturn {
  isHasParam: IsHasParamType;
  paramToggle: ParamToggleType;
}

const useQuery = (): IUseQueryReturn => {
  const history = useHistory();
  const location = useLocation();
  const queries: ParsedQuery = queryString.parse(location.search, queryOptions);

  const isHasParam: IsHasParamType = (key, value) => {
    if (!key) return false;
    if (typeof key === "string") {
      return key === value;
    }
    return key.includes(value);
  };

  const queryPush = (key: string, value: string | string[]) => {
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

  const queryRemove = (key: string) => {
    delete queries[key];
    history.push({
      search: queryString.stringify(queries, queryOptions),
    });
  };

  const paramToggle = (key: string, value: string, toggle = false) => {
    const keyParam = queries[key];
    if (!isHasParam(keyParam, value)) {
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
    isHasParam,
    paramToggle,
  };
};

export { useQuery };
