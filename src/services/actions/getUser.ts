import { updateTokenRequest, getUserRequest } from "../../utils/data";
import { deleteCookie, getCookie, setCookie } from "../../utils/cookie";
import { PATCH_USER_SUCCESS } from "./patchUser";
import { AppDispatch, AppThunk } from '../types';

export const GET_USER_REQUEST: "GET_USER_REQUEST" = "GET_USER_REQUEST";
export const GET_USER_SUCCESS: "GET_USER_SUCCESS" = "GET_USER_SUCCESS";
export const GET_USER_FAILED: "GET_USER_FAILED" = "GET_USER_FAILED";

export interface IGetUserAction {
  readonly type: typeof GET_USER_REQUEST;
}
export interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
}
export interface IGetUserFailedAction {
  readonly type: typeof GET_USER_FAILED;
}

export type TGetUserActions = 
| IGetUserAction
| IGetUserSuccessAction
| IGetUserFailedAction

export const getUser: AppThunk = () => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    try {
      const token = getCookie("token");
      const data = await getUserRequest(token);
      if (data?.success) {
        dispatch({
          type: GET_USER_SUCCESS,
          form: data.user,
        });
        dispatch({
          type: PATCH_USER_SUCCESS,
          form: data.user,
        });
      }
    } catch (err) {
      try {
        if (err === "Ошибка: 403") {
          console.log(err);
          deleteCookie("token");
          await updateToken();
          const token = getCookie("token");
          const data = await getUserRequest(token);
          if (data?.success) {
            dispatch({
              type: GET_USER_SUCCESS,
              form: data.user,
            });
            dispatch({
              type: PATCH_USER_SUCCESS,
              form: data.user,
            });
          } else {
            dispatch({ type: GET_USER_FAILED });
          }
        }
      } catch (error) {
        dispatch({ type: GET_USER_FAILED });
      }
    }
  };
}

export async function updateToken() {
  const token = localStorage.getItem("token");
  const data = await updateTokenRequest(token);
  if (data?.success) {
    setCookie("token", data.accessToken);
    localStorage.setItem("token", data.refreshToken);
  }
}
