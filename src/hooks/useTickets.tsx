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
      const res = await axios(
        `${BASE_URL}tickets?searchId=${searchToken}`,
        GET_CONFIG
      );
      setError("");
      console.log(errors);
      console.log(res.data.stop);
      setIsLoading(!res.data.stop);
      setTickets((state) => state.concat(res.data.tickets));
      if (!res.data.stop) {
        getTicketsPart();
      }
    } catch (err) {
      console.log('s');
    }
  }, [searchToken]);

  const getSearchToken = useCallback(async () => {
    const res = await axios(`${BASE_URL}search`, GET_CONFIG);
    const token: string = await res.data.searchId;
    setSearchToken(token);
  }, []);

  const getTicketsList = useCallback(() => {
    setIsLoading(true);
    if (!searchToken) {
      getSearchToken();
    } else {
      getTicketsPart();
    }
  }, [getSearchToken, getTicketsPart, searchToken]);

  useEffect(() => {
    getTicketsList();
  }, [getTicketsList]);

  return {
    tickets,
    isLoading,
    errors,
  };
};

export { useTickets };
