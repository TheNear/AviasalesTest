import { ITicketItem } from "../../types/tickets";

export interface ITicketsState {
  readonly tickets: ITicketItem[];
  readonly requestId?: string;
  readonly isFetchingTickets: boolean;
  readonly error: string;
}

export enum TicketsActionTypes {
  FETCH_TICKETS_REQUEST = "FETCH_TICKETS_REQUEST",
  FETCH_TICKETS_FAILED = "FETCH_TICKETS_FAILED",
  FETCH_TICKETS_SUCCESS = "FETCH_TICKETS_SUCCESS",
  FETCH_ID_REQUEST = "FETCH_ID_REQUEST",
  FETCH_ID_FAILED = "FETCH_ID_REQUEST",
  FETCH_ID_SUCCESS = "FETCH_ID_SUCCESS",
}

export interface ITicketsActions {
  type: TicketsActionTypes;
}

export interface FetchTicketsSuccessAction extends ITicketsActions {
  type: TicketsActionTypes.FETCH_TICKETS_SUCCESS;
  payload: ITicketItem[];
}

export interface FetchTicketsRequestAction extends ITicketsActions {
  type: TicketsActionTypes.FETCH_TICKETS_REQUEST;
}

export interface FetchTicketsFailedAction extends ITicketsActions {
  type: TicketsActionTypes.FETCH_TICKETS_FAILED;
  payload: string;
}

export type TicketActions =
  | FetchTicketsSuccessAction
  | FetchTicketsRequestAction
  | FetchTicketsFailedAction;
