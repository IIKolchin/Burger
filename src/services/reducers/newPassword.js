// import {
//   GET_NEW_PASSWORD_REQUEST,
//   GET_NEW_PASSWORD_SUCCESS,
//   GET_NEW_PASSWORD_FAILED,
//   SET_NEW_PASSWORD,
//   TGetNewPasswordActions,
  
// } from "../actions/newPassword";
// import { TUser } from "../types/data";

// type TNewPasswordState = {
//   form: TUser;
//   isNewPasswordSuccess: boolean;
//   newPasswordRequest: boolean;
//   newPasswordFailed: boolean;
// }

// const newPasswordInitialState: TNewPasswordState = {
//   form: {
//     password: "",
//     // token: "",
//   },
//   isNewPasswordSuccess: false,
//   newPasswordRequest: false,
//   newPasswordFailed: false,
// };

// export const newPasswordReducer = (state = newPasswordInitialState, action: TGetNewPasswordActions): TNewPasswordState => {
//   switch (action.type) {
//     case GET_NEW_PASSWORD_REQUEST: {
//       return {
//         ...state,
//         newPasswordRequest: true,
//         newPasswordFailed: false,
//       };
//     }
//     case GET_NEW_PASSWORD_SUCCESS: {
//       return {
//         ...state,
//         newPasswordFailed: false,
//         newPasswordRequest: false,
//         isNewPasswordSuccess: true,
//       };
//     }
//     case GET_NEW_PASSWORD_FAILED: {
//       return {
//         ...state,
//         newPasswordFailed: true,
//         newPasswordRequest: false,
//       };
//     }
//     case SET_NEW_PASSWORD: {
//       return {
//         ...state,
//         form: action.payload,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };
