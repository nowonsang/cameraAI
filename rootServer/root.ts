import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { mainReducer } from "../view/main/reducer";
import { mainEpic } from "../view/main/epic";

export const rootEpic = combineEpics(mainEpic);

export const rootReducer = combineReducers({
  MainReducer: mainReducer,
});
