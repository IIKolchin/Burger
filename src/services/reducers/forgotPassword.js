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
  };
  
  export const forgotPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
      case FORGOT_PASSWORD_REQUEST: {
        return {
          ...state,
        };
      }
      case FORGOT_PASSWORD_SUCCESS: {
        return {
          ...state,
          forgotPasswordSuccess: true,
        };
      }
      case  FORGOT_PASSWORD_FAILED: {
        return {
          ...state,
          forgotPasswordSuccess: false,
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
  