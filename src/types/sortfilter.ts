type Compare<T extends string, K> = { [key in T]: K };

type SortKey = "sort";
type FilterKey = "filter";

export type PossibleFilter = "all" | "0" | "1" | "2" | "3";
export type PossibleSort = "by_price" | "by_time";

export type QueryKeys = SortKey | FilterKey;

export type SortQuery = Compare<SortKey, PossibleSort[]>;
export type FilterQuery = Compare<FilterKey, PossibleFilter[]>;

export type SortFilterQuery = SortQuery & FilterQuery;
