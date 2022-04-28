import { patchUserRequest } from "../../utils/data";
import { updateToken } from "../actions/getUser";
import { GET_USER_SUCCESS } from "../actions/getUser";

export const PATCH_USER_REQUEST = "PATCH_USER_REQUEST";
export const PATCH_USER_SUCCESS = "PATCH_USER_SUCCESS";
export const PATCH_USER_FAILED = "PATCH_USER_FAILED";
export const SET_PATCH_USER = "SET_PATCH_USER";

export function patchUser(form) {
  return async function (dispatch) {
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
}
