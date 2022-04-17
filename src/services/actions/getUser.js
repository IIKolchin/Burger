import { updateTokenRequest, getUserRequest } from "../../utils/data";
import { deleteCookie, getCookie, setCookie } from "../../utils/cookie";
import { GET_AUTHORIZATION_SUCCESS } from "../actions/authorization";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export function getUser() {
  return async function (dispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    try {
      const token = getCookie("token");
      const data = await getUserRequest(token);
      if (data?.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        dispatch({
          type: GET_USER_SUCCESS,
          form: data.user,
        });
        dispatch({ type: GET_AUTHORIZATION_SUCCESS });
      }
    } catch (err) {
      try {
        if (err === "Ошибка: 403") {
          console.log(err);
          deleteCookie("token");
          localStorage.removeItem("user");
          await updateToken();
          const token = getCookie("token");
          const data = await getUserRequest(token);
          if (data?.success) {
            localStorage.setItem("user", JSON.stringify(data.user));
            dispatch({
              type: GET_USER_SUCCESS,
              form: data.user,
            });
            dispatch({ type: GET_AUTHORIZATION_SUCCESS });
          } else {
            dispatch({ type: GET_USER_FAILED });
          }
        }
        dispatch({ type: GET_USER_FAILED });
      } catch (error) {
        dispatch({ type: GET_USER_FAILED });
      }
    }
  };
}

export async function updateToken() {
  const token = localStorage.getItem("token");
  const data = await updateTokenRequest(token);
  if (data?.success) {
    setCookie("token", data.accessToken);
    localStorage.setItem("token", data.refreshToken);
  }
}
