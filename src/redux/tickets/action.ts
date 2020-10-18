import { Dispatch } from "react";
import { ITicketItem } from "../../types/tickets";
import { TicketsActionTypes, TicketActions } from "./types";

export const fetchTicketsSuccess = (tickets: ITicketItem[]): TicketActions => ({
  type: TicketsActionTypes.FETCH_TICKETS_SUCCESS,
  payload: tickets,
});

export const fetchTicketsRequest = (): TicketActions => ({
  type: TicketsActionTypes.FETCH_TICKETS_REQUEST,
});

export const fetchTicketsFailed = (error: string): TicketActions => ({
  type: TicketsActionTypes.FETCH_TICKETS_FAILED,
  payload: error,
});

// return (dispatch: Dispatch<TicketActions> ) => {

// };
