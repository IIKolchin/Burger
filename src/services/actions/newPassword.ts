import { URL, checkResponse } from "../../utils/data";
import { AppDispatch, AppThunk } from '../types';

export const GET_NEW_PASSWORD_REQUEST: "GET_NEW_PASSWORD_REQUEST" = "GET_NEW_PASSWORD_REQUEST";
export const GET_NEW_PASSWORD_SUCCESS: "GET_NEW_PASSWORD_SUCCESS" = "GET_NEW_PASSWORD_SUCCESS";
export const GET_NEW_PASSWORD_FAILED: "GET_NEW_PASSWORD_FAILED" = "GET_NEW_PASSWORD_FAILED";
export const SET_NEW_PASSWORD: "SET_NEW_PASSWORD" = "SET_NEW_PASSWORD";

export interface IGetNewPasswordAction {
  readonly type: typeof GET_NEW_PASSWORD_REQUEST;
}
export interface IGetNewPasswordSuccessAction {
  readonly type: typeof GET_NEW_PASSWORD_SUCCESS;
}
export interface IGetNewPasswordFailedAction {
  readonly type: typeof GET_NEW_PASSWORD_FAILED;
}
export interface ISetNewPasswordAction {
  readonly type: typeof SET_NEW_PASSWORD;
}

export type TGetNewPasswordActions =
| IGetNewPasswordAction
| IGetNewPasswordSuccessAction
| IGetNewPasswordFailedAction
| ISetNewPasswordAction

export const getNewPassword: AppThunk = (form) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_NEW_PASSWORD_REQUEST,
    });
    fetch(`${URL}password-reset/reset`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_NEW_PASSWORD_SUCCESS,
            form: res.user,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: GET_NEW_PASSWORD_FAILED,
        });
      });
  };
}
