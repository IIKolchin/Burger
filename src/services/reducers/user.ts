import {
  GET_AUTHORIZATION_REQUEST,
  GET_AUTHORIZATION_SUCCESS,
  GET_AUTHORIZATION_FAILED,
  SET_AUTHORIZATION,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  SET_FORGOT_PASSWORD,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  GET_NEW_PASSWORD_REQUEST,
  GET_NEW_PASSWORD_SUCCESS,
  GET_NEW_PASSWORD_FAILED,
  SET_NEW_PASSWORD,
  PATCH_USER_REQUEST,
  PATCH_USER_SUCCESS,
  PATCH_USER_FAILED,
  SET_PATCH_USER,
  GET_REGISTER_REQUEST,
  GET_REGISTER_SUCCESS,
  GET_REGISTER_FAILED,
  SET_REGISTER,
  TAutorizationActions,
  TForgotPasswordActions,
  TGetUserActions,
  TLogoutActions,
  TGetNewPasswordActions,
  TPatchUserActions,
  TRegisterActions,
} from "../actions/user";
import { TUser } from "../types/data";

type TAuthorizationState = {
  form: TUser;
  authorizationRequest: boolean;
  authorizationFailed: boolean;
  isAuth: boolean;
};

type TforgotPasswordState = {
  form: TUser;
  forgotPasswordSuccess: boolean;
};

type TGetUserState = {
  form: TUser;
  userRequest: boolean;
  userFailed: boolean;
  isUser: boolean;
};

type TLogoutState = {
  logoutRequest: boolean;
  logoutFailed: boolean;
};

type TNewPasswordState = {
  form: TUser;
  isNewPasswordSuccess: boolean;
  newPasswordRequest: boolean;
  newPasswordFailed: boolean;
};

type TPatchUserState = {
  form: TUser;
  userRequest: boolean;
  userFailed: boolean;
};

type TRegisterState = {
  form: TUser;
  registerRequest: boolean;
  registerFailed: boolean;
};

const authorizationInitialState: TAuthorizationState = {
  form: {
    email: "",
    password: "",
  },
  authorizationRequest: false,
  authorizationFailed: false,
  isAuth: false,
};

const forgotPasswordinitialState: TforgotPasswordState = {
  form: {
    email: "",
  },
  forgotPasswordSuccess: false,
};

const userInitialState: TGetUserState = {
  form: {
    email: "",
    name: "",
  },
  userRequest: false,
  userFailed: false,
  isUser: false,
};

const logoutInitialState: TLogoutState = {
  logoutRequest: false,
  logoutFailed: false,
};

const newPasswordInitialState: TNewPasswordState = {
  form: {
    password: "",
    // token: "",
  },
  isNewPasswordSuccess: false,
  newPasswordRequest: false,
  newPasswordFailed: false,
};

const patchUserinitialState: TPatchUserState = {
  form: {
    email: "",
    name: "",
    password: "",
  },
  userRequest: false,
  userFailed: false,
};

const registerInitialState: TRegisterState = {
  form: {
    email: "",
    name: "",
    password: "",
  },
  registerRequest: false,
  registerFailed: false,
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

export const forgotPasswordReducer = (
  state = forgotPasswordinitialState,
  action: TForgotPasswordActions
): TforgotPasswordState => {
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
    case FORGOT_PASSWORD_FAILED: {
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

export const userReducer = (
  state = userInitialState,
  action: TGetUserActions
): TGetUserState => {
  switch (action.type) {
    case GET_USER_REQUEST: {
      return {
        ...state,
        userRequest: true,
        userFailed: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        userFailed: false,
        userRequest: false,
        isUser: true,
        form: action.form,
      };
    }
    case GET_USER_FAILED: {
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

export const logoutReducer = (
  state = logoutInitialState,
  action: TLogoutActions
): TLogoutState => {
  switch (action.type) {
    case LOGOUT_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
        logoutFailed: false,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutFailed: false,
        logoutRequest: false,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,

        logoutFailed: true,
        logoutRequest: false,
      };
    }

    default: {
      return state;
    }
  }
};

export const newPasswordReducer = (
  state = newPasswordInitialState,
  action: TGetNewPasswordActions
): TNewPasswordState => {
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
      };
    }
    default: {
      return state;
    }
  }
};

export const patchUserReducer = (
  state = patchUserinitialState,
  action: TPatchUserActions
): TPatchUserState => {
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
        form: { ...state.form, ...action.form },
      };
    }
    case PATCH_USER_FAILED: {
      return {
        ...state,
        userFailed: true,
        userRequest: false,
      };
    }
    case SET_PATCH_USER: {
      return {
        ...state,
        form: { ...state.form, ...action.payload },
      };
    }

    default: {
      return state;
    }
  }
};

export const registerReducer = (
  state = registerInitialState,
  action: TRegisterActions
): TRegisterState => {
  switch (action.type) {
    case GET_REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
      };
    }
    case GET_REGISTER_SUCCESS: {
      return {
        ...state,
        registerFailed: false,
        form: action.form,
        registerRequest: false,
      };
    }
    case GET_REGISTER_FAILED: {
      return {
        ...state,
        registerFailed: true,
        registerRequest: false,
      };
    }
    case SET_REGISTER: {
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
