import { Reducer } from "redux";
import { ITicketsState, TicketActions, TicketsActionTypes, TicketsSortTypes } from "./types";

const initialState: ITicketsState = {
  list: [],
  sortType: TicketsSortTypes.BY_PRICE,
  isFetchingTickets: false,
  error: "",
};

const ticketsReducer: Reducer<ITicketsState, TicketActions> = (state = initialState, action) => {
  switch (action.type) {
    case TicketsActionTypes.START_FETCH_TICKETS:
      return {
        ...state,
        list: [],
        error: "",
        isFetchingTickets: true,
      };
    case TicketsActionTypes.STOP_FETCH_TICKETS:
      return {
        ...state,
        isFetchingTickets: false,
      };
    case TicketsActionTypes.FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        list: state.list.concat(action.payload),
      };
    case TicketsActionTypes.FETCH_TICKETS_FAILED:
      return {
        ...state,
        isFetchingTickets: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { ticketsReducer };
