import { ITicketItem } from "../../types/tickets";

type SortTicket = (a: ITicketItem, b: ITicketItem) => number;
type FilterByStopsType = (tickets: ITicketItem[], stopsCount: string[]) => ITicketItem[];

export const filterByStops: FilterByStopsType = (tickets, stopsCount) => {
  return tickets.filter((item) => {
    if (!stopsCount.length) return item;
    const stops = item.segments[0].stops.length + item.segments[1].stops.length;
    return stopsCount.includes(`${stops}`);
  });
};

export const sortByPrice: SortTicket = (a, b) => a.price - b.price;
export const sortByTime: SortTicket = (a, b) => {
  const firstDuration = a.segments[0].duration + a.segments[1].duration;
  const secondDuration = b.segments[0].duration + b.segments[1].duration;
  return firstDuration - secondDuration;
};
