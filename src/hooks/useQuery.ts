import { useHistory, useLocation } from "react-router-dom";
import queryString, { ParsedQuery, ParseOptions } from "query-string";
import { useCallback, useEffect, useMemo, useState } from "react";
import { makeArray } from "../assets/js/helpers";

const parseOption: ParseOptions = { arrayFormat: "comma" };

type HasValue = (key: string | string[] | undefined | null | boolean, value: string) => boolean;
type ToggleValue<T, A = Extract<keyof T, string>> = (
  key: A,
  value: string,
  toggle?: boolean
) => void;
type GetValue<T, A = Extract<keyof T, string>> = (key: A) => string[];
type SetValue<T, A = Extract<keyof T, string>> = (key: A, value: string | string[]) => void;
type GetValues<T, A = Extract<keyof T, string>> = (keys: A[]) => ParsedQueryR<T>;
type PushQuery = (query: ParsedQuery) => void;

export type ParsedQueryR<T = PossibleQueries> = {
  [K in keyof T]: T[K];
};

type PossibleQueries = {
  [key: string]: string[];
};

interface UseQueryR<T> {
  hasValue: HasValue;
  toggleValue: ToggleValue<T>;
  getValue: GetValue<T>;
  setValue: SetValue<T>;
  getValues: GetValues<T>;
  defaultValue: string[];
}

const useQuery = <
  T extends PossibleQueries,
  A extends Extract<keyof T, string> = Extract<keyof T, string>
>(
  defaultKey?: A
): UseQueryR<T> => {
  const history = useHistory();
  const location = useLocation();
  const [queries, setQueries] = useState<ParsedQuery>({});

  const pushQuery: PushQuery = useCallback(
    (query) => {
      history.push({ search: queryString.stringify(query, parseOption) });
    },
    [history]
  );

  const hasValue: HasValue = useCallback((key, value) => {
    return key && Array.isArray(key) ? key.includes(value) : key === value;
  }, []);

  const getValue: GetValue<T> = useCallback(
    (key) => {
      return makeArray(queries[key]) || [];
    },
    [queries]
  );

  const getValues: GetValues<T> = useCallback(
    (keys) => {
      return keys.reduce((acc, cur) => {
        const value = makeArray(queries[cur]);
        return value ? { ...acc, [cur]: value || [] } : acc;
      }, {} as ParsedQueryR<T>);
    },
    [queries]
  );

  const setValue: SetValue<T> = useCallback(
    (key, value) => {
      pushQuery({ ...queries, [key]: value });
    },
    [queries, pushQuery]
  );

  const toggleValue: ToggleValue<T> = useCallback(
    (key, newValue) => {
      const oldValue = makeArray(queries[key]);
      if (oldValue) {
        if (hasValue(oldValue, newValue)) {
          setValue(
            key,
            oldValue.filter((item) => item !== newValue)
          );
        } else {
          setValue(key, [...oldValue, newValue]);
        }
      } else {
        setValue(key, newValue);
      }
    },
    [queries, hasValue, setValue]
  );

  const defaultValue: string[] = useMemo(() => {
    return defaultKey ? getValue(defaultKey) : [];
  }, [defaultKey, getValue]);

  useEffect(() => {
    setQueries(queryString.parse(location.search, parseOption));
  }, [location]);

  return {
    setValue,
    toggleValue,
    hasValue,
    getValue,
    getValues,
    defaultValue,
  };
};

export { useQuery };
