import { URL, checkResponse } from "../../utils/data";

export const GET_NEW_PASSWORD_REQUEST = "GET_REGISTER_REQUEST";
export const GET_NEW_PASSWORD_SUCCESS = "GET_REGISTER_SUCCESS";
export const GET_NEW_PASSWORD_FAILED = "GET_REGISTER_FAILED";
export const SET_NEW_PASSWORD = "SET_REGISTER";

export function getNewPassword(form) {
  return function (dispatch) {
    dispatch({
      type: GET_NEW_PASSWORD_REQUEST,
    });
    fetch(`${URL}password-reset/reset`, {
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
            type: GET_NEW_PASSWORD_SUCCESS,
            form: res.user,
          });
        } else {
          dispatch({
            type: GET_NEW_PASSWORD_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: GET_NEW_PASSWORD_FAILED,
        });
      });
  };
}
