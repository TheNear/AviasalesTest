import axios, { AxiosResponse } from "axios";
import axiosRetry from "axios-retry";
import { IApiResonseID, IApiResponseTickets } from "../types/tickets";

const aviaApi = axios.create({
  baseURL: "https://front-test.beta.aviasales.ru/",
  timeout: 1500,
});

axiosRetry(aviaApi, { retries: 2 });

const get = async <T>(url: string): Promise<T> => {
  const response: AxiosResponse<T> = await aviaApi(url);
  return response.data;
};

export const getSearchID = async (): Promise<IApiResonseID> => get("search");
export const getTicketsPart = async (searchId: string): Promise<IApiResponseTickets> => {
  return get(`/tickets?searchId=${searchId}`);
};
