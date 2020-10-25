import { ITicketItem } from "../../types/tickets";
import { DEFAULT_COUNT_TICKETS } from "./constants";

type SortFilterFuncType = (tickets: ITicketItem[]) => ITicketItem[];
type FuncArrayTypes = [SortFilterFuncType?, SortFilterFuncType?];

type SortFilterType = (
  tickets: ITicketItem[],
  queue: FuncArrayTypes,
  length?: number
) => ITicketItem[];

type FilterByStopsType = (stopsCount: number[]) => SortFilterFuncType;

export const filterByStops: FilterByStopsType = (stopsCount) => {
  return (tickets) => {
    return tickets.filter((item) => {
      if (stopsCount.includes(0)) return item;
      const stops = item.segments[0].stops.length + item.segments[1].stops.length;
      return stopsCount.includes(stops);
    });
  };
};

export const sortByPrice: SortFilterFuncType = (tickets) => {
  return tickets.sort((a, b) => a.price - b.price);
};

export const sortByTime: SortFilterFuncType = (tickets) => {
  return tickets.sort((a, b) => {
    const firstDuration = a.segments[0].duration + a.segments[1].duration;
    const secondDuration = b.segments[0].duration + b.segments[1].duration;
    return firstDuration - secondDuration;
  });
};

/**
 *
 * @param tickets Array of tickets wich we want to SORT and then FILTER
 * @param queue Array of Functions.
 * ATTENTION: first of all SORT function
 * array and then FILTER function
 * @param length Return array length
 */

export const sortFilter: SortFilterType = (tickets, queue, length = DEFAULT_COUNT_TICKETS) => {
  let copy = tickets.slice();

  if (queue.length) {
    queue.forEach((func) => {
      if (func) {
        copy = func(copy);
      }
    });
  }

  copy.splice(0, length);

  return copy;
};
