import axios from "axios";
import { GET_CONFIG } from "./config";

const get = async (url: string) => {
  try {
    const response = await axios(url, GET_CONFIG);
  } catch {
    throw new Error("Error just happened");
  }
};
