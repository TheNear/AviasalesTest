export type SortKey = "sort";

export enum SortVariations {
  by_price = "by_price",
  by_time = "by_time",
}

export type FilterKey = "filter";

// export enum FilterStrings
export type QueryKeys = SortKey | FilterKey;
