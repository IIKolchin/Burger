// import {
//   GET_USER_REQUEST,
//   GET_USER_SUCCESS,
//   GET_USER_FAILED,
//   TGetUserActions,
// } from "../actions/getUser";
// import { TUser } from "../types/data";

// type TGetUserState = {
//   form: TUser;
//   userRequest: boolean;
//   userFailed: boolean;
//   isUser: boolean;
// };


// const userInitialState: TGetUserState = {
//   form: {
//     email: "",
//     name: "",
//   },
//   userRequest: false,
//   userFailed: false,
//   isUser: false,
// };

// export const userReducer = (state = userInitialState, action: TGetUserActions): TGetUserState => {
//   switch (action.type) {
//     case GET_USER_REQUEST: {
//       return {
//         ...state,
//         userRequest: true,
//         userFailed: false,
//       };
//     }
//     case GET_USER_SUCCESS: {
//       return {
//         ...state,
//         userFailed: false,
//         userRequest: false,
//         isUser: true,
//         form: action.form,
//       };
//     }
//     case GET_USER_FAILED: {
//       return {
//         ...state,

//         userFailed: true,
//         userRequest: false,
//         isUser: false,
//       };
//     }

//     default: {
//       return state;
//     }
//   }
// };
