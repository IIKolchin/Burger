import {
    UPDATE_TOKEN_REQUEST,
    UPDATE_TOKEN_SUCCESS,
    UPDATE_TOKEN_FAILED,
    SET_NEW_TOKEN
  } from "../actions/updateToken";
  
  const updateTokenInitialState = {
    accessToken: '',
    updateTokenRequest: false,
    updateTokenFailed: false,
  };
  
  export const updateTokenReducer = (state = updateTokenInitialState, action) => {
    switch (action.type) {
      case UPDATE_TOKEN_REQUEST: {
        return {
          ...state,
          updateTokenRequest: true,
          updateTokenFailed: false,
        };
      }
      case UPDATE_TOKEN_SUCCESS: {
        return {
          ...state,
          updateTokenFailed: false,
          accessToken: action.accessToken,
          updateTokenRequest: false,
        };
      }
      case UPDATE_TOKEN_FAILED: {
        return {
          ...state,
          accessToken: '',
          updateTokenFailed: true,
          updateTokenRequest: false,
        };
      }



      default: {
        return state;
      }
    }
  };
  