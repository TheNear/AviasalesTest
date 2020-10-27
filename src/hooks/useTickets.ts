import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { filterByStops, sortByPrice, sortByTime, sortFilter } from "../assets/js/sortFilter";
import { RootState } from "../types/redux";
import { ITicketItem } from "../types/tickets";
import { GetKeysValuesReturnType, useQuery } from "./useQuery";

const useTickets = () => {
  const { getKeysValues } = useQuery();
  const tickets = useSelector((state: RootState) => state.tickets.list);
  const isFetching = useSelector((state: RootState) => state.tickets.isFetchingTickets);
  const error = useSelector((state: RootState) => state.tickets.error);
  const [filtredTickets, setFiltredTickets] = useState<ITicketItem[]>([]);
  const [queryKeys, setQueryKeys] = useState<GetKeysValuesReturnType>({});

  useEffect(() => {
    setQueryKeys(getKeysValues(["filter", "sort"]));
  }, [getKeysValues]);

  useEffect(() => {
    const sortFunctions = [];

    if (queryKeys.sort) {
      switch (queryKeys.sort[0]) {
        case "by_time":
          sortFunctions.push(sortByTime);
          break;
        case "by_price":
          sortFunctions.push(sortByPrice);
          break;
        default:
          sortFunctions.push(sortByPrice);
          break;
      }
    } else {
      sortFunctions.push(sortByPrice);
    }

    if (queryKeys.filter) {
      const stops = Array.isArray(queryKeys.filter) ? queryKeys.filter : [queryKeys.filter];
      sortFunctions.push(filterByStops(stops));
    }

    setFiltredTickets(sortFilter(tickets, sortFunctions));
  }, [tickets, queryKeys]);

  return {
    tickets: filtredTickets,
    isFetching,
    error,
  };
};

export { useTickets };
