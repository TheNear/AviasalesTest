import React, { useEffect, useState } from "react";
import style from "./SearchPage.module.css";
import Filter from "../../components/Filter/Filter";
import SortControls from "../../components/SortControls/SortControls";
import TicketsList from "../../components/TicketsList/TicketsList";
import { useTickets } from "../../hooks/useTickets";
import { ITicketItem } from "../../components/Ticket/Ticket";

const SearchPage: React.FC = () => {
  const { tickets, isLoading, errors, refreshTicketsList } = useTickets();
  const [sortedTickets, setSortedTickets] = useState<Array<ITicketItem>>([]);

  useEffect(() => {
    if (isLoading) return;
    setSortedTickets(tickets.slice(0, 5));
  }, [tickets, isLoading]);

  return (
    <main className={style.container}>
      <Filter />
      <SortControls />
      <TicketsList
        isLoading={isLoading}
        hasError={errors}
        refreshTicketsList={refreshTicketsList}
        tickets={sortedTickets}
      />
    </main>
  );
};

export default SearchPage;
