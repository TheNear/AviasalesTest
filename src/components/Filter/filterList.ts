export interface IFilterItem {
  text: string;
  name: string;
}

export const filterList = [
  {
    text: "Все",
    name: "filter__all__transfer",
  },
  {
    text: "Без пересадок",
    name: "filter__without__transfer",
  },
  {
    text: "1 пересадка",
    name: "filter__one__transfer",
  },
  {
    text: "2 пересадка",
    name: "filter__two__transfer",
  },
  {
    text: "3 пересадка",
    name: "filter__three__transfer",
  },
];
