import { URL, checkResponse } from "../../utils/data";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });

    //   .then(checkResponse)
    fetch(`${URL}ingredients`)
    .then(checkResponse)
      .then((res) => {
        if (checkResponse) {
            console.log(res.data);
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
