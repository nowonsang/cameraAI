export const faceApiEpic = "view/main/action/faceApi";
export const successApi = "view/main/action/faceApiResult";
export const failApi = "view/main/action/faceFailApi";

export const faceEpic = (payload: any) => ({
  type: faceApiEpic,
  payload,
});

export const returnReducer = (payload: any) => ({
  type: successApi,
  payload,
});

export const failReducer = (payload: any) => ({
  type: failApi,
  payload,
});
