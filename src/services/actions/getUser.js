import { URL, checkResponse } from "../../utils/data";
import { getCookie } from "../../utils/cookie";
import { updateTokenRequest } from "../../services/actions/updateToken";
import { GET_AUTHORIZATION_SUCCESS } from "../actions/authorization";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export function getUserRequest() {
  return async function (dispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    fetch(`${URL}auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: getCookie("token"),
      },
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          console.log(res)
          dispatch({
            type: GET_USER_SUCCESS,
            form: res.user,
          });
          dispatch({ type: GET_AUTHORIZATION_SUCCESS });
        } 
      })
      .catch((err) => {
        console.log(err === "Ошибка: 403");
    
        if(err === "Ошибка: 403") {
          dispatch({ type: GET_USER_FAILED });
          dispatch(updateTokenRequest());
          dispatch(getUserRequest())
        }
      });
  };
}
