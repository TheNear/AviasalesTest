import { combineReducers } from "redux";
import { ticketsReducer } from "./tickets/reducer";

export default combineReducers({
  tickets: ticketsReducer,
});
