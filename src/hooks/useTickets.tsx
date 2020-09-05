import { useState } from "react";
import axios from "axios";
import { BASE_URL, GET_CONFIG } from "../api/config";
import { ITicketItem } from "../components/Ticket/Ticket";

const useTickets = () => {
  const [tickets, setTickets] = useState<Array<ITicketItem>>([]);
  const [searchToken, setSearchToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setError] = useState<string>("");

  const getTicketsPart = async () => {
    try {
      const response = await axios(
        `${BASE_URL}tickets?searchId=${searchToken}`,
        GET_CONFIG
      );
      setTickets(response.data.tickets);
      setIsLoading(!response.data.stop);
    } catch (error) {
      setError(error.message);
    }
  };

  const getSearchToken = async () => {
    try {
      const response = await axios(`${BASE_URL}search`, GET_CONFIG);
      setSearchToken(response.data.searchId);
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    tickets,
    isLoading,
    errors,
  };
};
