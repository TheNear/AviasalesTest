import axios, { AxiosResponse } from "axios";
import axiosRetry from "axios-retry";
import { BASE_URL, FETCH_TIMEOUT, SEARCH_URL, TICKETS_URL } from "../assets/js/constants";
import { IApiResonseID, IApiResponseTickets } from "../types/tickets";

const aviaApi = axios.create({
  baseURL: BASE_URL,
  timeout: FETCH_TIMEOUT,
});

axiosRetry(aviaApi, { retries: 2 });

const get = async <T>(url: string): Promise<T> => {
  const response: AxiosResponse<T> = await aviaApi(url);
  return response.data;
};

export const getSearchID = async (): Promise<IApiResonseID> => get(SEARCH_URL);
export const getTicketsPart = async (searchId: string): Promise<IApiResponseTickets> => {
  return get(`${TICKETS_URL}${searchId}`);
};
