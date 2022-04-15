import { setCookie } from "../../utils/cookie"
import { URL, checkResponse } from "../../utils/data";
import { getUserRequest } from "../actions/getUser"

export const GET_AUTHORIZATION_REQUEST = "GET_AUTHORIZATION_REQUEST";
export const GET_AUTHORIZATION_SUCCESS = "GET_AUTHORIZATION_SUCCESS";
export const GET_AUTHORIZATION_FAILED = "GET_AUTHORIZATION_FAILED";
export const SET_AUTHORIZATION = "SET_AUTHORIZATION";

export function loginRequest(form) {
  return async function (dispatch) {
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
        if (res && res.success) {
          dispatch({
            type: GET_AUTHORIZATION_SUCCESS,
          });
          setCookie('token', res.accessToken);
          localStorage.setItem('token', res.refreshToken);
          sessionStorage.setItem('login', JSON.stringify(res.user));
          dispatch(getUserRequest());
        } 
        else {
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
