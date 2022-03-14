import {
    GET_NEW_PASSWORD_REQUEST,
    GET_NEW_PASSWORD_SUCCESS,
    GET_NEW_PASSWORD_FAILED,
    SET_NEW_PASSWORD,
  
  } from "../actions/newPassword";
  
  const newPasswordInitialState = {
    form: {  
      password: "",
      token: "",
    },
    isNewPasswordSuccess: false,
    newPasswordRequest: false,
    newPasswordFailed: false,
  };
  
  export const newPasswordReducer = (state = newPasswordInitialState, action) => {
    switch (action.type) {
      case GET_NEW_PASSWORD_REQUEST: {
        return {
          ...state,
          newPasswordRequest: true,
          newPasswordFailed: false,
        };
      }
      case GET_NEW_PASSWORD_SUCCESS: {
        return {
          ...state,
          newPasswordFailed: false,
          form: action.payload,
          newPasswordRequest: false,
          isNewPasswordSuccess: true,
        };
      }
      case GET_NEW_PASSWORD_FAILED: {
        return {
          ...state,
          newPasswordFailed: true,
          newPasswordRequest: false,
        };
      }
      case SET_NEW_PASSWORD: {
          return {
              ...state,
              form: action.payload,
          }
      }
      default: {
        return state;
      }
    }
  };
  