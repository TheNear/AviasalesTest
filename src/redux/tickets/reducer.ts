import { Reducer } from "redux";
import { ITicketsState, TicketActions, TicketsActionTypes } from "./types";

const initialState: ITicketsState = {
  tickets: [],
  isFetchingTickets: false,
  error: "",
};

const ticketsReducer: Reducer<ITicketsState> = (state = initialState, action: TicketActions) => {
  switch (action.type) {
    case TicketsActionTypes.FETCH_TICKETS_REQUEST:
      return {
        ...state,
        isFetchingTickets: true,
      };
    case TicketsActionTypes.FETCH_TICKETS_SUCCESS:
      return state;
    case TicketsActionTypes.FETCH_TICKETS_FAILED:
      return state;
    default:
      return state;
  }
};

export { ticketsReducer };
