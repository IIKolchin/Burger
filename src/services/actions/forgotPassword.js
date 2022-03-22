import { URL, checkResponse } from "../../utils/data";


export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";
export const SET_FORGOT_PASSWORD = "SET_FORGOT_PASSWORD";

export function forgotPassword(form) {

  return async function (dispatch) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    });
    fetch(`${URL}password-reset`, {
      method: "POST",
      body: JSON.stringify({
        email: form,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
          });
          localStorage.setItem("forgot-password", res.success);
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FORGOT_PASSWORD_FAILED,
        });
      });
  };
}
