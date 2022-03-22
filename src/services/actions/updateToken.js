import { URL, checkResponse } from "../../utils/data";
import { getUserRequest } from "./getUser";
import { setCookie } from "../../utils/cookie";

export const UPDATE_TOKEN_REQUEST = "UPDATE_TOKEN_REQUEST";
export const UPDATE_TOKEN_SUCCESS = "UPDATE_TOKEN_SUCCESS";
export const UPDATE_TOKEN_FAILED = "UPDATE_TOKEN_FAILED";

export function updateTokenRequest() {
  return function (dispatch) {
    dispatch({
      type: UPDATE_TOKEN_REQUEST,
    });
    fetch(`${URL}auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: UPDATE_TOKEN_SUCCESS,
          });
          setCookie("token", res.accessToken);
          localStorage.setItem("token", res.refreshToken);
          dispatch(getUserRequest());
        } else {
          dispatch({
            type: UPDATE_TOKEN_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: UPDATE_TOKEN_FAILED,
        });
      });
  };
}
