import { URL, checkResponse } from "../../utils/data";
import { getCookie } from "../../utils/cookie";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";
export const SHOW_ORDER = "SHOW_ORDER";
export const CLOSE_ORDER = "CLOSE_ORDER";

export function getOrder(id) {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    fetch(`${URL}orders`, {
      method: "POST",
      body: JSON.stringify({
        ingredients: id,
      }),
      headers: {
        "Content-Type": "application/json",
        'Authorization': getCookie('token')
      },
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_ORDER_SUCCESS,
            order: res.order,
          });
        } else {
          dispatch({
            type: GET_ORDER_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: GET_ORDER_FAILED,
        });
      });
  };
}
