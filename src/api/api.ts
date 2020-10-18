import axios, { AxiosResponse } from "axios";
import { GET_CONFIG } from "./config";

const get = async <T>(url: string) => {
  try {
    const response: AxiosResponse<T> = await axios(url, GET_CONFIG);
    return response;
  } catch {
    throw new Error("Error just happened");
  }
};

get<ITicketResponse>("dfafdsadas").then((res) => );
