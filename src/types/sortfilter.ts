export type SortKey = "sort";
export type FilterKey = "filter";

export enum SortVariations {
  by_price = "by_price",
  by_time = "by_time",
}

// export enum FilterStrings
export type QueryKeys = SortKey | FilterKey;
