import { ThunkAction } from "redux-thunk";
import rootReduces from "../redux/rootReducer";
import { TicketActions } from "../redux/tickets/types";

export type ActionTypes = TicketActions;
export type RootState = ReturnType<typeof rootReduces>;

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, ActionTypes>;
