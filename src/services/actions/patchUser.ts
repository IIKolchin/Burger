import { patchUserRequest } from "../../utils/data";
import { updateToken } from "./getUser";
import { GET_USER_SUCCESS } from "./getUser";
import { AppDispatch, AppThunk } from "../types";
import { TUser } from "../types/data";

export const PATCH_USER_REQUEST: "PATCH_USER_REQUEST" = "PATCH_USER_REQUEST";
export const PATCH_USER_SUCCESS: "PATCH_USER_SUCCESS" = "PATCH_USER_SUCCESS";
export const PATCH_USER_FAILED: "PATCH_USER_FAILED" = "PATCH_USER_FAILED";
export const SET_PATCH_USER: "SET_PATCH_USER" = "SET_PATCH_USER";

export interface IPatchUserAction {
  readonly type: typeof PATCH_USER_REQUEST;
}
export interface IPatchUserSuccessAction {
  readonly type: typeof PATCH_USER_SUCCESS;
  form: TUser;
}
export interface IPatchUserFailedAction {
  readonly type: typeof PATCH_USER_FAILED;
}
export interface ISetPatchUserAction {
  readonly type: typeof SET_PATCH_USER;
  payload: TUser;
}

export type TPatchUserActions =
  | IPatchUserAction
  | IPatchUserSuccessAction
  | IPatchUserFailedAction
  | ISetPatchUserAction;

export const patchUser: AppThunk = (form) => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: PATCH_USER_REQUEST,
    });
    try {
      const data = await patchUserRequest(form);
      if (data && data.success) {
        dispatch({
          type: PATCH_USER_SUCCESS,
          form: data.user,
        });
      }
    } catch (err) {
      try {
        if (err === "Ошибка: 403") {
          await updateToken();
          const data = await patchUserRequest(form);
          if (data && data.success) {
            dispatch({
              type: PATCH_USER_SUCCESS,
              form: data.user,
            });
            dispatch({
              type: GET_USER_SUCCESS,
            });
          }
        }
      } catch (err) {
        dispatch({ type: PATCH_USER_FAILED });
      }
    }
  };
};
