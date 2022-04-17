// import { URL, checkResponse, updateToken } from "../../utils/data";
// import { getUserRequest } from "./getUser";
// import { setCookie } from "../../utils/cookie";

// export const UPDATE_TOKEN_REQUEST = "UPDATE_TOKEN_REQUEST";
// export const UPDATE_TOKEN_SUCCESS = "UPDATE_TOKEN_SUCCESS";
// export const UPDATE_TOKEN_FAILED = "UPDATE_TOKEN_FAILED";

// export function updateTokenRequest() {
//   return async function (dispatch) {
//     dispatch({
//       type: UPDATE_TOKEN_REQUEST,
//     });

//     try {
// const token = localStorage.getItem("token")

//       const data = await updateToken(token)
//       if(data?.success) {
//         console.log(data.refreshToken)
//         console.log(data.accessToken)
//         setCookie("token", data.accessToken);
//                 localStorage.setItem("token", data.refreshToken);
//                 dispatch({
//                   type: UPDATE_TOKEN_SUCCESS,
//                 });        
//       } else {
//         localStorage.removeItem('user')
//         dispatch({
//           type: UPDATE_TOKEN_FAILED,
//         });
//       }
//     } catch(err) {
//       dispatch({
//         type: UPDATE_TOKEN_FAILED,
//       });
//     }

//   }
// }

    // fetch(`${URL}auth/token`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     token: localStorage.getItem("token"),
    //   }),
    // })
    //   .then(checkResponse)
    //   .then((res) => {
    //     console.log(res.accessToken)
    //     if (res && res.success) {
    //       setCookie("token", res.accessToken);
    //       localStorage.setItem("token", res.refreshToken);
    //       dispatch({
    //         type: UPDATE_TOKEN_SUCCESS,
    //       });        
    //     } else {
    //       dispatch({
    //         type: UPDATE_TOKEN_FAILED,
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     dispatch({
    //       type: UPDATE_TOKEN_FAILED,
    //     });
    //   });

