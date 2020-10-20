import { combineReducers } from "redux";
import { ticketsReducer } from "./tickets/reducer";

const rootReduces = combineReducers({
  tickets: ticketsReducer,
});

export default rootReduces;
