import {
  GET_AUTHORIZATION_REQUEST,
  GET_AUTHORIZATION_SUCCESS,
  GET_AUTHORIZATION_FAILED,
  SET_AUTHORIZATION,
  TAutorizationActions
} from "../actions/authorization";
import { TUser } from "../types/data";


type TAuthorizationState = {
  form: TUser;
  authorizationRequest: boolean;
  authorizationFailed: boolean;
  isAuth: boolean;
}

const authorizationInitialState: TAuthorizationState = {
  form: {
    email: "",
    password: "",
  },
  authorizationRequest: false,
  authorizationFailed: false,
  isAuth: false,
};

export const authorizationReducer = (
  state = authorizationInitialState,
  action: TAutorizationActions
): TAuthorizationState => {
  switch (action.type) {
    case GET_AUTHORIZATION_REQUEST: {
      return {
        ...state,
        authorizationRequest: true,
        authorizationFailed: false,
        isAuth: true,
      };
    }
    case GET_AUTHORIZATION_SUCCESS: {
      return {
        ...state,
        authorizationFailed: false,
        authorizationRequest: false,
        isAuth: true,
      };
    }
    case GET_AUTHORIZATION_FAILED: {
      return {
        ...state,
        authorizationFailed: true,
        authorizationRequest: false,
        isAuth: false,
      };
    }
    case SET_AUTHORIZATION: {
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
