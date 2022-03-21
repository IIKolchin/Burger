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
        console.log(res.refreshToken)
        if (res && res.success) {
          console.log(res.user)
          dispatch({
            type: GET_AUTHORIZATION_SUCCESS,
            // accessToken: res.accessToken
          });
          setCookie('token', res.accessToken);
          localStorage.setItem('token', res.refreshToken);
          sessionStorage.setItem('login', res.user.name);
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
