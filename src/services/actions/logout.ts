import { URL } from "../../utils/data";
import { deleteCookie } from "../../utils/cookie";
import { GET_AUTHORIZATION_FAILED } from "./authorization";
import { GET_USER_FAILED } from "./getUser";
import { AppDispatch, AppThunk } from '../types';

export const LOGOUT_REQUEST: "LOGOUT_REQUEST" = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS: "LOGOUT_SUCCESS" = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED: "LOGOUT_FAILED" = "LOGOUT_FAILED";

export interface ILogoutAction {
  readonly type: typeof LOGOUT_REQUEST;
}
export interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
}
export interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_FAILED;
}

export type TLogoutActions = 
| ILogoutAction
| ILogoutSuccessAction
| ILogoutFailedAction

export const logoutRequest: AppThunk = () => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    fetch(`${URL}auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res && res.success) {
          localStorage.removeItem("token");
          deleteCookie("token");
          dispatch({ type: LOGOUT_SUCCESS });
          dispatch({ type: GET_AUTHORIZATION_FAILED });
          dispatch({ type: GET_USER_FAILED });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: LOGOUT_FAILED,
        });
      });
  };
}
