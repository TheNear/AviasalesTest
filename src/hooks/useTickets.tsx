import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { BASE_URL, GET_CONFIG } from "../api/config";
import { ITicketItem } from "../components/Ticket/Ticket";

interface IUseTickets {
  tickets: Array<ITicketItem>;
  isLoading: boolean;
  errors: string;
  refreshTicketsList: () => void;
}

const useTickets = (): IUseTickets => {
  const [tickets, setTickets] = useState<Array<ITicketItem>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setError] = useState<string>("");

  const getTicketsPart = useCallback((token) => {
    axios(`${BASE_URL}tickets?searchId=${token}`, GET_CONFIG)
      .then((res) => {
        setTickets((state) => state.concat(res.data.tickets));
        setIsLoading(!res.data.stop);
        if (!res.data.stop) getTicketsPart(token);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  const getTicketsList = useCallback((token: string) => {
    // let connectError = "";
    // const getTicketsPart = async () => {
    //   try {
    //     const res = await axios(`${BASE_URL}tickets?searchId=${token}`, GET_CONFIG);
    //     setTickets((state) => state.concat(res.data.tickets));
    //     setIsLoading(!res.data.stop);
    //     connectError = "";
    //     if (!res.data.stop) {
    //       getTicketsPart();
    //     }
    //   } catch (err) {
    //     if (connectError) {
    //       setError(connectError);
    //       setIsLoading(false);
    //     } else {
    //       connectError = err.message;
    //       getTicketsPart();
    //     }
    //   }
    // };
    // getTicketsPart();
  }, []);

  const getSearchToken = useCallback(async () => {
    const res = await axios(`${BASE_URL}search`, GET_CONFIG);
    const token: string = await res.data.searchId;
    return token;
  }, []);

  const refreshTicketsList = useCallback(async () => {
    setTickets([]);
    setIsLoading(true);
    setError("");
    try {
      const token: string = await getSearchToken();
      getTicketsList(token);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  }, [getTicketsList, getSearchToken]);

  useEffect(() => {
    refreshTicketsList();
  }, [refreshTicketsList]);

  return {
    tickets,
    isLoading,
    errors,
    refreshTicketsList,
  };
};

export { useTickets };
