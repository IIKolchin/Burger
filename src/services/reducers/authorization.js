import {
    GET_AUTHORIZATION_REQUEST,
    GET_AUTHORIZATION_SUCCESS,
    GET_AUTHORIZATION_FAILED,
    SET_AUTHORIZATION
  } from "../actions/authorization";
  
  const authorizationInitialState = {
    form: {
      email: "",
      password: "",
    },
    authorizationRequest: false,
    authorizationFailed: false,
    accessToken: "",
    isAuth: false,
    };
  
  export const authorizationReducer = (state = authorizationInitialState, action) => {
    switch (action.type) {
      case GET_AUTHORIZATION_REQUEST: {
        return {
          ...state,
          authorizationRequest: true,
          authorizationFailed: false,
        };
      }
      case GET_AUTHORIZATION_SUCCESS: {
        return {
          ...state,
          authorizationFailed: false,
          accessToken: action.accessToken,
          authorizationRequest: false,
          isAuth: true,

        };
      }
      case GET_AUTHORIZATION_FAILED: {
        return {
          ...state,
          accessToken: '',
          authorizationFailed: true,
          authorizationRequest: false,
          isAuth: false,
        };
      }
      case SET_AUTHORIZATION: {
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
  