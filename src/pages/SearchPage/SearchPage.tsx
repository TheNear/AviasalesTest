import React, { useEffect } from "react";
import style from "./SearchPage.module.css";
import Filter from "../../components/Filter/Filter";
import SortControls from "../../components/SortControls/SortControls";
import TicketsList from "../../components/TicketsList/TicketsList";
import { useTickets } from "../../hooks/useTickets";

const SearchPage: React.FC = () => {
  const { tickets, isLoading, errors } = useTickets();

  useEffect(() => {
    console.log(tickets);
  }, [tickets]);

  return (
    <main className={style.container}>
      <Filter />
      <SortControls />
      <TicketsList isLoading={isLoading} />
    </main>
  );
};

export default SearchPage;
