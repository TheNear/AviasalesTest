import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { BASE_URL, GET_CONFIG } from "../api/config";
import { ITicketItem } from "../components/Ticket/Ticket";

interface IUseTickets {
  tickets: Array<ITicketItem>;
  isLoading: boolean;
  errors: string;
}

const useTickets = (): IUseTickets => {
  const [tickets, setTickets] = useState<Array<ITicketItem>>([]);
  const [searchToken, setSearchToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setError] = useState<string>("");

  const getTicketsPart = useCallback(async () => {
    try {
      const response = await axios(
        `${BASE_URL}tickets?searchId=${searchToken}`,
        GET_CONFIG
      );
      setIsLoading(!response.data.stop);
      setTickets((state) => state.concat(response.data.tickets));
    } catch (error) {
      if (error.response.status === 500) {
        getTicketsPart();
      }
    }
  }, [searchToken]);

  const getSearchToken = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios(`${BASE_URL}search`, GET_CONFIG);
      setSearchToken(response.data.searchId);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    if (searchToken && isLoading) {
      getTicketsPart();
    }
  }, [searchToken, getTicketsPart, isLoading, tickets]);

  useEffect(() => {
    getSearchToken();
  }, [getSearchToken]);

  return {
    tickets,
    isLoading,
    errors,
  };
};

export { useTickets };
