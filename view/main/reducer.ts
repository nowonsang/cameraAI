import { combineReducers } from "redux";

import { successApi, failApi } from "./action";

export interface ActionInterface {
  type: string;
  payload: any;
}

const rootReducer: any = (
  state = {
    payload: [],
  },
  action: ActionInterface
) => {
  switch (action.type) {
    case successApi:
      return {
        ...state,
        payload: action.payload,
      };
    case failApi:
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return { ...state };
  }
};

export const mainReducer = combineReducers({ view: rootReducer });
