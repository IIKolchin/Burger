import { URL, checkResponse } from "../../utils/data";
import { getCookie } from "../../utils/cookie";


export const PATCH_USER_REQUEST = "GET_USER_REQUEST";
export const PATCH_USER_SUCCESS = "GET_USER_SUCCESS";
export const PATCH_USER_FAILED = "GET_USER_FAILED";

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
        console.log(!res.success);
        if (res && res.success) {
          console.log(res.user);
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
