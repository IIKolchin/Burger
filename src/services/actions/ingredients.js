import { URL, checkResponse } from "../../utils/data";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM"
export const ADD_BUN = "ADD_BUN";
export const UPDATE_POSITION_ITEM = "UPDATE_POSITION_ITEM";
export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";


export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });


    fetch(`${URL}ingredients`)
      .then(checkResponse)
      .then((res) => {
        if (checkResponse) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            data: res.data,
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        });
      });
  };
}
