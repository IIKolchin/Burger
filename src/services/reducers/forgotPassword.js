// import {
//     FORGOT_PASSWORD_REQUEST,
//     FORGOT_PASSWORD_SUCCESS,
//     FORGOT_PASSWORD_FAILED,
//     SET_FORGOT_PASSWORD,
//     TForgotPasswordActions
//   } from "../actions/forgotPassword";
//   import { TUser } from "../types/data";

//   type TforgotPasswordState = {
//     form: TUser;
//     forgotPasswordSuccess: boolean;
//   }
  
//   const initialState: TforgotPasswordState = {
//     form: {
//       email: "", 
//     },
//     forgotPasswordSuccess: false,
//   };
  
//   export const forgotPasswordReducer = (state = initialState, action: TForgotPasswordActions): TforgotPasswordState => {
//     switch (action.type) {
//       case FORGOT_PASSWORD_REQUEST: {
//         return {
//           ...state,
//         };
//       }
//       case FORGOT_PASSWORD_SUCCESS: {
//         return {
//           ...state,
//           forgotPasswordSuccess: true,
//         };
//       }
//       case  FORGOT_PASSWORD_FAILED: {
//         return {
//           ...state,
//           forgotPasswordSuccess: false,
//         };
//       }
//       case SET_FORGOT_PASSWORD: {
//         return {
//           ...state,
//           form: action.payload,
//         };
//       }
//       default: {
//         return state;
//       }
//     }
//   };
  