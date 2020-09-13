import React from "react";
import style from "./SearchPage.module.css";
import Filter from "../../components/Filter/Filter";
import SortControls from "../../components/SortControls/SortControls";
import TicketsList from "../../components/TicketsList/TicketsList";
import { useTickets } from "../../hooks/useTickets";

const SearchPage: React.FC = () => {
  const { tickets, isLoading, errors, refreshTicketsList } = useTickets(5);

  return (
    <main className={style.container}>
      <Filter />
      <SortControls />
      <TicketsList
        isLoading={isLoading}
        hasError={errors}
        refreshTicketsList={refreshTicketsList}
        tickets={tickets.slice(0, 5)}
      />
    </main>
  );
};

export default SearchPage;
