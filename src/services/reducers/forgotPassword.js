import {
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILED,
    SET_FORGOT_PASSWORD
  } from "../actions/forgotPassword";
  
  const initialState = {
    form: {
      email: "", 
    },
    forgotPasswordSuccess: false,
    forgotPasswordRequest: false,
    forgotPasswordFailed: false,
  };
  
  export const forgotPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
      case FORGOT_PASSWORD_REQUEST: {
        return {
          ...state,
          forgotPasswordRequest: true,
          forgotPasswordFailed: false,
        };
      }
      case FORGOT_PASSWORD_SUCCESS: {
        return {
          ...state,
          forgotPasswordFailed: false,
          forgotPasswordRequest: false,
          forgotPasswordSuccess: true,
        };
      }
      case  FORGOT_PASSWORD_FAILED: {
        return {
          ...state,
          forgotPasswordFailed: true,
          forgotPasswordRequest: false,
        };
      }
      case SET_FORGOT_PASSWORD: {
        return {
          ...state,
          form: action.payload,
        };
      }
      default: {
        return state;
      }
    }
  };
  