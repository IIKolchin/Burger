import { URL } from "../../utils/data";
import { getCookie } from "../../utils/cookie";

export const PATCH_USER_REQUEST = "PATCH_USER_REQUEST";
export const PATCH_USER_SUCCESS = "PATCH_USER_SUCCESS";
export const PATCH_USER_FAILED = "PATCH_USER_FAILED";
export const SET_PATCH_USER = "SET_PATCH_USER";

export function patchUserRequest(form) {
  return async function (dispatch) {
    dispatch({
      type: PATCH_USER_REQUEST,
    });
    fetch(`${URL}auth/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: PATCH_USER_SUCCESS,
            form: res.user,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: PATCH_USER_FAILED,
        });
      });
  };
}
