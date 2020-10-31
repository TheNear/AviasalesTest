type Compare<T extends string, K> = { [key in T]: K };

export type SortKey = "sort";
export type FilterKey = "filter";

export type SortPrice = "by_price";
export type SortTime = "by_time";

type PossibleFilter = "0" | "1" | "2" | "3";
type PossibleSort = SortPrice | SortTime;

export type QueryKeys = SortKey | FilterKey;

type SortQuery = Compare<SortKey, PossibleSort>;
type FilterQuery = Compare<FilterKey, PossibleFilter[]>;

export type SortFilterQuery = SortQuery | FilterQuery;

// export enum FilterStrings
