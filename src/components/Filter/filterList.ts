import { PossibleFilter } from "../../types/sortfilter";

export interface IFilterItem {
  text: string;
  name: string;
  value: PossibleFilter;
}

export const filterList: IFilterItem[] = [
  {
    text: "Все",
    name: "filter__all__transfer",
    value: "all",
  },
  {
    text: "Без пересадок",
    name: "filter__without__transfer",
    value: "0",
  },
  {
    text: "1 пересадка",
    name: "filter__one__transfer",
    value: "1",
  },
  {
    text: "2 пересадка",
    name: "filter__two__transfer",
    value: "2",
  },
  {
    text: "3 пересадка",
    name: "filter__three__transfer",
    value: "3",
  },
];
