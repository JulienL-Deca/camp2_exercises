import { applyMiddleware, createStore } from "redux";
import counterReducer from "./counter/reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(
  counterReducer,
  applyMiddleware(thunk, logger)
);

export default store;
