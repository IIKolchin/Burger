import {
    PATCH_USER_REQUEST,
    PATCH_USER_SUCCESS,
    PATCH_USER_FAILED,
  } from "../actions/patchUser";
  
  const initialState = {
    form: {
      email: "",
      name: "",
    },
    userRequest: false,
    userFailed: false,
  
    isUser: false,
  };
  
  export const patchUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case PATCH_USER_REQUEST: {
        return {
          ...state,
          userRequest: true,
          userFailed: false,
        };
      }
      case PATCH_USER_SUCCESS: {
        return {
          ...state,
          userFailed: false,
          userRequest: false,
          isUser: true,
          form: action.form
        };
      }
      case PATCH_USER_FAILED: {
        return {
          ...state,
  
          userFailed: true,
          userRequest: false,
          isUser: false,
        };
      }
  
      default: {
        return state;
      }
    }
  };
  