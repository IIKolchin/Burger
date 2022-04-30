// import {
//     LOGOUT_REQUEST,
//     LOGOUT_SUCCESS,
//     LOGOUT_FAILED,
//     TLogoutActions,
    
//   } from "../actions/logout";

//   type TLogoutState = {
//     logoutRequest: boolean;
//     logoutFailed: boolean;
//   }
  
//   const logoutInitialState: TLogoutState = {
//     logoutRequest: false,
//     logoutFailed: false,
//   };
  
//   export const logoutReducer = (state = logoutInitialState, action: TLogoutActions): TLogoutState => {
//     switch (action.type) {
//       case LOGOUT_REQUEST: {
//         return {
//           ...state,
//           logoutRequest: true,
//           logoutFailed: false,
//         };
//       }
//       case LOGOUT_SUCCESS: {
//         return {
//           ...state,
//           logoutFailed: false,
//           logoutRequest: false,
//         };
//       }
//       case LOGOUT_FAILED: {
//         return {
//           ...state,
    
//           logoutFailed: true,
//           logoutRequest: false,
//         };
//       }

//       default: {
//         return state;
//       }
//     }
//   };
  