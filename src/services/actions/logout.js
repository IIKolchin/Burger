import { URL } from "../../utils/data";
import { deleteCookie } from "../../utils/cookie";
import { GET_AUTHORIZATION_FAILED } from "../actions/authorization";
import { GET_USER_FAILED } from "../actions/getUser";
import { FORGOT_PASSWORD_FAILED } from "../actions/forgotPassword"

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export function logoutRequest() {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    fetch(`${URL}auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res && res.success) {
          localStorage.removeItem("token");
          sessionStorage.removeItem("login");
          deleteCookie("token");
          dispatch({ type: LOGOUT_SUCCESS });
          dispatch({ type: GET_AUTHORIZATION_FAILED });
          dispatch({ type: GET_USER_FAILED });
          dispatch({ type: FORGOT_PASSWORD_FAILED });
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: LOGOUT_FAILED,
        });
      });
  };
}
