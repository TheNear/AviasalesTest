import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { ActionTypes, RootState } from "../types/redux";
import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState, ActionTypes>))
);

export default store;
