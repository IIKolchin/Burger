import {
  URL,
  checkResponse,
  updateTokenRequest,
  getUserRequest,
} from "../../utils/data";
import { deleteCookie, getCookie, setCookie } from "../../utils/cookie";
// import { updateTokenRequest } from "../../services/actions/updateToken";
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
      console.log();
      try {
        if (err === "Ошибка: 403") {
          console.log(err);
          deleteCookie("token");
          // localStorage.removeItem("user");
          await updateToken();

          const token = getCookie("token");
          console.log(getCookie("token"));
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
    console.log(data.accessToken);
    setCookie("token", data.accessToken);
    console.log(getCookie("token"));
    localStorage.setItem("token", data.refreshToken);
  }
}

//         console.log(err);
//         if (err === "Ошибка: 403") {
//           localStorage.removeItem("user");

//           dispatch(getUserRequest());
//           dispatch({ type: GET_USER_FAILED });
//         }
//       });
//   };
// }

// export function getUserRequest() {
//   return async function (dispatch) {
//     dispatch({
//       type: GET_USER_REQUEST,
//     });
//     fetch(`${URL}auth/user`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: getCookie("token"),
//       },
//     })
//       .then(checkResponse)
//       .then((res) => {
//         if (res && res.success) {
//           localStorage.setItem("user", JSON.stringify(res.user));
//           dispatch({
//             type: GET_USER_SUCCESS,
//             form: res.user,
//           });
//           dispatch({ type: GET_AUTHORIZATION_SUCCESS });
//         }
//       })
//       .catch((err) => {

// try {
// if (err === "Ошибка: 403") {
//   localStorage.removeItem("user");
//   dispatch(updateTokenRequest())
//   .then(() => {
//     fetch(`${URL}auth/user`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: getCookie("token"),
//       },
//     })
//       .then(checkResponse)
//   })

// }
// } catch(error) {

// }

//         console.log(err);
//         if (err === "Ошибка: 403") {
//           localStorage.removeItem("user");

//           dispatch(getUserRequest());
//           dispatch({ type: GET_USER_FAILED });
//         }
//       });
//   };
// }
