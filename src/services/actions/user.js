import { URL, checkResponse } from "../../utils/data";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";
export const SET_USER = "SET_USER";

export function getUser(form) {
  return function (dispatch) {
    dispatch({
      type: GET_REGISTER_REQUEST,
    });
    fetch(`${URL}auth/auth/user`, {
      method: "GET",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + getCookie('token')
      },
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
            console.log(res.user)
          dispatch({
            type: GET_REGISTER_SUCCESS,
            // form: res.user
          });
        } else {
          dispatch({
            type: GET_REGISTER_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: GET_REGISTER_FAILED,
        });
      });
  };
}
