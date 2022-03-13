import { setCookie } from "../../utils/cookie"
import { URL, checkResponse } from "../../utils/data";

export const GET_AUTHORIZATION_REQUEST = "GET_AUTHORIZATION_REQUEST";
export const GET_AUTHORIZATION_SUCCESS = "GET_AUTHORIZATION_SUCCESS";
export const GET_AUTHORIZATION_FAILED = "GET_AUTHORIZATION_FAILED";
export const SET_AUTHORIZATION = "SET_AUTHORIZATION";

export function loginRequest(form) {
  return function (dispatch) {
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
        console.log(res.accessToken)
        if (res && res.success) {
          dispatch({
            type: GET_AUTHORIZATION_SUCCESS,
            accessToken: res.accessToken
          });
          setCookie('token', res.refreshToken);
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
