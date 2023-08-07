import { faceEpic, returnReducer, failReducer } from "./action";
import { Action } from "react-redux";
import { Observable, of, Subscriber } from "rxjs";

import {
  ActionsObservable,
  combineEpics,
  ofType,
  StateObservable,
} from "redux-observable";

import { mergeMap, map, catchError } from "rxjs/operators";

class faceApiClass {
  requestApi() {
    return new Observable((subscriber) => {
      this.faceApiRequest(subscriber);
    });
  }

  async faceApiRequest(subscriber: any) {
    let url = "";
    let headers = {};

    let response = await fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then(async (result) => {
        console.log("결과값 확인", result);
        return await result.json();
      })
      .then(async (responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        return { resultCode: 400, resultMsg: `unknow ${error}` };
      });

    switch (response.resultCode) {
      case 200:
        console.log("탭카운터 resultData", response);
        subscriber.next({
          data: response.resultData,
          msg: response.resultMsg,
          success: true,
        });
        break;
      case 400:
        subscriber.next({
          data: response.resultData,
          msg: response.resultMsg,
          success: false,
        });
        break;
      default:
        subscriber.next({
          data: response.resultData,
          msg: response.resultMsg,
          success: false,
        });
        break;
    }
  }
}

const faceOpenApi = new faceApiClass();

const main = (
  action$: ActionsObservable<Action>,
  state$: StateObservable<any>
): Observable<Action> => {
  return action$.pipe(
    ofType(faceEpic),
    mergeMap((action) =>
      faceOpenApi.requestApi().pipe(
        map((result: any) => {
          if (result.success) {
            return returnReducer(result);
          } else {
            return failReducer(result);
          }
        })
      )
    )
  );
};

export const mainEpic = combineEpics(main);
