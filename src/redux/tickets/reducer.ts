import { act } from "react-dom/test-utils";
import { Reducer } from "redux";
import { ITicketsState, TicketActions, TicketsActionTypes } from "./types";

const initialState: ITicketsState = {
  tickets: [],
  isFetchingSearchId: false,
  isFetchingTickets: false,
  errors: [],
};

const ticketsReducer: Reducer<ITicketsState> = (state = initialState, action: TicketActions) => {
  switch (action.type) {
    case TicketsActionTypes.FETCH_ID_REQUEST:
      return state;
    default:
      return state;
  }
};

export { ticketsReducer };
