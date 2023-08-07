import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import logger from "redux-logger";
const epicMiddleware = createEpicMiddleware();
import { rootEpic, rootReducer } from "./rootServer/root.ts";

import { combineReducers } from "redux";

const store = createStore(
  combineReducers({
    rootReducer,
  }),
  applyMiddleware(epicMiddleware, logger)
);

export default store;
