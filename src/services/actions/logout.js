import { getCookie } from "../../utils/cookie"
import { URL, checkResponse } from "../../utils/data";

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
        token: getCookie('token'),
        
      }),
    })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: LOGOUT_FAILED,
        });
      });
  };
}
