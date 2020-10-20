import { ITicketItem } from "../../types/tickets";

export enum TicketsSortTypes {
  BY_PRICE = "BY_PRICE",
  BY_SPEED = "BY_SPEED",
}

export interface ITicketsState {
  readonly list: ITicketItem[];
  readonly sortType: TicketsSortTypes;
  readonly requestId?: string;
  readonly isFetchingTickets: boolean;
  readonly error: string;
}

export enum TicketsActionTypes {
  START_FETCH_TICKETS = "START_FETCH_TICKETS",
  STOP_FETCH_TICKETS = "STOP_FETCH_TICKETS",
  FETCH_TICKETS_FAILED = "FETCH_TICKETS_FAILED",
  FETCH_TICKETS_SUCCESS = "FETCH_TICKETS_SUCCESS",
}

export interface ITicketsActions {
  type: TicketsActionTypes;
}

export interface FetchTicketsSuccessAction extends ITicketsActions {
  type: TicketsActionTypes.FETCH_TICKETS_SUCCESS;
  payload: ITicketItem[];
}

export interface StartFetchTicketsAction extends ITicketsActions {
  type: TicketsActionTypes.START_FETCH_TICKETS;
}

export interface StopFetchTicketsAction extends ITicketsActions {
  type: TicketsActionTypes.STOP_FETCH_TICKETS;
}

export interface FetchTicketsFailedAction extends ITicketsActions {
  type: TicketsActionTypes.FETCH_TICKETS_FAILED;
  payload: string;
}

export type TicketActions =
  | FetchTicketsSuccessAction
  | FetchTicketsFailedAction
  | StartFetchTicketsAction
  | StopFetchTicketsAction;
