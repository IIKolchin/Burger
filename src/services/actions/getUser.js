import { URL, checkResponse } from "../../utils/data";
import { getCookie } from "../../utils/cookie"
import { updateTokenRequest } from "../../services/actions/updateToken";


export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export function getUserRequest(accessToken) {
  return async function (dispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
  fetch(`${URL}auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: accessToken,
      },
    })
      .then(res => res.json())
      .then((res) => {
        console.log(!res.success)
        if (res && res.success) {
            console.log(res.user)
          dispatch({
            type: GET_USER_SUCCESS,
            form: res.user
          });
        } else if (!res.success) {
          dispatch(updateTokenRequest());  
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_USER_FAILED,
          
        });
        console.log(err);

      });
  };
}
