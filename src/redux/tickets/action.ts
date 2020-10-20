import { getSearchID, getTicketsPart } from "../../api/api";
import { ThunkResult } from "../../types/redux";
import { ITicketItem } from "../../types/tickets";
import { TicketsActionTypes, TicketActions } from "./types";

export const fetchTicketsSuccess = (tickets: ITicketItem[]): TicketActions => ({
  type: TicketsActionTypes.FETCH_TICKETS_SUCCESS,
  payload: tickets,
});

export const fetchTicketsFailed = (error: string): TicketActions => ({
  type: TicketsActionTypes.FETCH_TICKETS_FAILED,
  payload: error,
});

export const startFetchTickets = (): TicketActions => ({
  type: TicketsActionTypes.START_FETCH_TICKETS,
});

export const stopFetchTickets = (): TicketActions => ({
  type: TicketsActionTypes.STOP_FETCH_TICKETS,
});

export const getTickets = (): ThunkResult<Promise<TicketActions>> => {
  return async (dispatch) => {
    dispatch(startFetchTickets());
    try {
      const { searchId } = await getSearchID();
      const ticketPullChain = async (url: string) => {
        const response = await getTicketsPart(url);
        dispatch(fetchTicketsSuccess(response.tickets));
        if (!response.stop) {
          await ticketPullChain(url);
        }
      };

      await ticketPullChain(searchId);
      return dispatch(stopFetchTickets());
    } catch (error) {
      return dispatch(fetchTicketsFailed(error.message));
    }
  };
};
