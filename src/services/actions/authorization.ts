import { setCookie } from "../../utils/cookie";
import { URL, checkResponse } from "../../utils/data";
import { getUser } from "./getUser";
import { AppDispatch, AppThunk } from '../types';

export const GET_AUTHORIZATION_REQUEST: "GET_AUTHORIZATION_REQUEST" = "GET_AUTHORIZATION_REQUEST";
export const GET_AUTHORIZATION_SUCCESS: "GET_AUTHORIZATION_SUCCESS" = "GET_AUTHORIZATION_SUCCESS";
export const GET_AUTHORIZATION_FAILED: "GET_AUTHORIZATION_FAILED" = "GET_AUTHORIZATION_FAILED";
export const SET_AUTHORIZATION: "SET_AUTHORIZATION" = "SET_AUTHORIZATION";

export interface IGetAutorizationAction {
  readonly type: typeof GET_AUTHORIZATION_REQUEST;
}
export interface IGetAutorizationSuccessAction {
  readonly type: typeof GET_AUTHORIZATION_SUCCESS;
}
export interface IGetAutorizationFailedAction {
  readonly type: typeof GET_AUTHORIZATION_FAILED;
}
export interface ISetAutorizationAction {
  readonly type: typeof SET_AUTHORIZATION;
  payload: object
}

export type TAutorizationActions =
| IGetAutorizationAction
| IGetAutorizationSuccessAction
| IGetAutorizationFailedAction
| ISetAutorizationAction;

export const loginRequest: AppThunk = (form) => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: GET_AUTHORIZATION_REQUEST,
    });
    fetch(`${URL}auth/login`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          setCookie("token", res.accessToken);
          localStorage.setItem("token", res.refreshToken);
          dispatch(getUser());
          dispatch({
            type: GET_AUTHORIZATION_SUCCESS,
          });
        } else {
          dispatch({
            type: GET_AUTHORIZATION_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: GET_AUTHORIZATION_FAILED,
        });
      });
  };
}
