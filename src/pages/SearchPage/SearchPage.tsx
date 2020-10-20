import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./SearchPage.module.css";
import Filter from "../../components/Filter/Filter";
import SortControls from "../../components/SortControls/SortControls";
import TicketsList from "../../components/TicketsList/TicketsList";
import { getTickets } from "../../redux/tickets/action";
import { RootState } from "../../types/redux";

const SearchPage: React.FC = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state: RootState) => state.tickets.list);
  const isFetching = useSelector((state: RootState) => state.tickets.isFetchingTickets);
  const error = useSelector((state: RootState) => state.tickets.error);

  const getTicketsList = useCallback(() => {
    dispatch(getTickets());
  }, [dispatch]);

  useEffect(() => {
    getTicketsList();
  }, [getTicketsList]);

  return (
    <main className={style.container}>
      <Filter />
      <SortControls />
      <TicketsList
        isLoading={isFetching}
        hasError={error}
        refreshTicketsList={getTicketsList}
        tickets={tickets.slice(0, 5)}
      />
    </main>
  );
};

export default SearchPage;
