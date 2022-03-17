import { getCookie } from "../../utils/cookie"
import { URL, checkResponse } from "../../utils/data";

export const UPDATE_TOKEN_REQUEST = "UPDATE_TOKEN_REQUEST";
export const UPDATE_TOKEN_SUCCESS = "UPDATE_TOKEN_SUCCESS";
export const UPDATE_TOKEN_FAILED = "UPDATE_TOKEN_FAILED";
export const SET_NEW_TOKEN = "SET_NEW_TOKEN";

export function updateTokenRequest() {
  return async function (dispatch) {
    dispatch({
      type: UPDATE_TOKEN_REQUEST,
    });
    fetch(`${URL}auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: getCookie('token'),
        
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          console.log(res.accessToken)
          dispatch({
            type: UPDATE_TOKEN_SUCCESS,
            accessToken: res.accessToken,
          });
          // fetch(`${URL}auth/user`, {
          //   method: "GET",
          //   headers: {
          //     "Content-Type": "application/json",
          //     authorization: res.accessToken,
          //   },
          // })
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
