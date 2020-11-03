import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DEFAULT_COUNT_TICKETS } from "../assets/js/constants";
import { filterByStops, sortByPrice, sortByTime } from "../assets/js/sortFilter";
import { RootState } from "../types/redux";
import { PossibleFilter, PossibleSort, SortFilterQuery } from "../types/sortfilter";
import { ITicketItem } from "../types/tickets";
import { ParsedQueryR, useQuery } from "./useQuery";

interface UseTicketsReturn {
  tickets: ITicketItem[];
  isFetching: boolean;
  error: string;
}

type UseTickets = () => UseTicketsReturn;

const useTickets: UseTickets = () => {
  const { getValues } = useQuery<SortFilterQuery>();
  const tickets = useSelector((state: RootState) => state.tickets.list);
  const isFetching = useSelector((state: RootState) => state.tickets.isFetchingTickets);
  const error = useSelector((state: RootState) => state.tickets.error);
  const [filtredTickets, setFiltredTickets] = useState<ITicketItem[]>([]);
  const [values, setValues] = useState<ParsedQueryR<SortFilterQuery>>(
    {} as ParsedQueryR<SortFilterQuery>
  );

  useEffect(() => {
    setValues(getValues(["sort", "filter"]));
  }, [getValues]);

  useEffect(() => {
    const ticketsCopy = [...tickets];
    const [sortValue]: PossibleSort[] = values.sort || [];
    const filterValue: PossibleFilter[] = values.filter;

    switch (sortValue) {
      case "by_time":
        ticketsCopy.sort(sortByTime);
        break;
      case "by_price":
        ticketsCopy.sort(sortByPrice);
        break;
      default:
        ticketsCopy.sort(sortByPrice);
    }

    if (filterValue) {
      setFiltredTickets(filterByStops(ticketsCopy, filterValue).slice(0, DEFAULT_COUNT_TICKETS));
    } else {
      setFiltredTickets(ticketsCopy.slice(0, DEFAULT_COUNT_TICKETS));
    }
  }, [tickets, values]);

  return {
    tickets: filtredTickets,
    isFetching,
    error,
  };
};

export { useTickets };
