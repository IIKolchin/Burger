// import { URL, checkResponse } from "../../utils/data";
// import { AppDispatch, AppThunk } from "../types";
// import { TUser } from "../types/data";


// export const GET_REGISTER_REQUEST: "GET_REGISTER_REQUEST" = "GET_REGISTER_REQUEST";
// export const GET_REGISTER_SUCCESS: "GET_REGISTER_SUCCESS" = "GET_REGISTER_SUCCESS";
// export const GET_REGISTER_FAILED: "GET_REGISTER_FAILED" = "GET_REGISTER_FAILED";
// export const SET_REGISTER: "SET_REGISTER" = "SET_REGISTER";

// export interface IGetRegisterAction {
//   readonly type: typeof GET_REGISTER_REQUEST;
// }
// export interface IGetRegisteSuccessrAction {
//   readonly type: typeof GET_REGISTER_SUCCESS;
//   form: TUser;
// }
// export interface IGetRegisterfailedAction {
//   readonly type: typeof GET_REGISTER_FAILED;
// }
// export interface ISetRegisterAction {
//   readonly type: typeof SET_REGISTER;
//   payload: TUser;
// }

// export type TRegisterActions =
// | IGetRegisterAction
// | IGetRegisteSuccessrAction
// | IGetRegisterfailedAction
// | ISetRegisterAction

// export const register: AppThunk = (form: TUser) => {
//   return function (dispatch: AppDispatch) {
//     dispatch({
//       type: GET_REGISTER_REQUEST,
//     });
//     fetch(`${URL}auth/register`, {
//       method: "POST",
//       body: JSON.stringify(form),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then(checkResponse)
//       .then((res) => {
//         if (res && res.success) {
//           dispatch({
//             type: GET_REGISTER_SUCCESS,
//             form: res.user,
//           });
//         } else {
//           dispatch({
//             type: GET_REGISTER_FAILED,
//           });
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch({
//           type: GET_REGISTER_FAILED,
//         });
//       });
//   };
// }
