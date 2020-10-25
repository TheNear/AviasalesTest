import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { sortByPrice, sortFilter } from "../assets/js/sortFilter";
import { RootState } from "../types/redux";
import { ITicketItem } from "../types/tickets";

const useTickets = () => {
  const tickets = useSelector((state: RootState) => state.tickets.list);
  const isFetching = useSelector((state: RootState) => state.tickets.isFetchingTickets);
  const error = useSelector((state: RootState) => state.tickets.error);
  const [filtredTickets, setFiltredTickets] = useState<ITicketItem[]>([]);

  useEffect(() => {
    // const sortQuery = query.getKeyValues("sort");
    // switch (sortQuery) {
    //   case "by_price":
    //     // setFiltredTickets(sortByPrice());
    //     break;
    //   case "by_time":
    //     // sortByDuration();
    //     break;
    //   default:
    //     // setFiltredTickets(sortByPrice());
    //     break;
    setFiltredTickets(sortFilter(tickets, [sortByPrice]));
    // }
  }, [tickets]);

  return {
    tickets: filtredTickets,
    isFetching,
    error,
  };
};

export { useTickets };
