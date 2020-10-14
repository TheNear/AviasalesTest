import { Dispatch } from "react";
import { TicketsActionTypes, ITicketItem, TicketActions } from "./types";

export const fetchTicketsSuccess = (tickets: ITicketItem[]): TicketActions => ({
  type: TicketsActionTypes.FETCH_TICKETS_SUCCESS,
  payload: tickets,
});

export const fetchTicketsRequest = () => {
  
  
  return (dispatch: Dispatch<TicketActions> ) => {
    
  };
}