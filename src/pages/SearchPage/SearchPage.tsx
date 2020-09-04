import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { BASE_URL, GET_CONFIG } from "../../api/config";
import style from "./SearchPage.module.css";
import Filter from "../../components/Filter/Filter";
import SortControls from "../../components/SortControls/SortControls";
import TicketsList from "../../components/TicketsList/TicketsList";
import { ITicketItem } from "../../components/Ticket/Ticket";

const SearchPage: React.FC = () => {
  const [tickets, setTickets] = useState<Array<ITicketItem>>([]);
  const [searchToken, setSearchToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setError] = useState<string>("");

  const getTicketsPart = async () => {
    const response = await axios(
      `${BASE_URL}tickets?searchId=${searchToken}`,
      GET_CONFIG
    );
    setTickets(response.data.tickets);
    setIsLoading(!response.data.stop);
  };

  const getSearchToken = async () => {
    const response = await axios(`${BASE_URL}search`, GET_CONFIG);
    setSearchToken(response.data.searchId);
  };

  useEffect(() => {
    if (isLoading) {
    }
  }, [isLoading, tickets]);

  return (
    <main className={style.container}>
      <Filter />
      <SortControls />
      <TicketsList isLoading={isLoading} />
    </main>
  );
};

export default SearchPage;
