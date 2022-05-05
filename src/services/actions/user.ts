import {
  getUserRequest,
  updateTokenRequest,
  forgotPasswordRequest,
} from "../../utils/api";
import { AppDispatch, AppThunk } from "../types";
import { deleteCookie, getCookie, setCookie } from "../../utils/cookie";
import { TUser } from "../types/data";
import {
  authorizationRequest,
  getNewPasswordRequest,
  logoutRequest,
  patchUserRequest,
  registerRequest,
} from "../../utils/api";

export const GET_AUTHORIZATION_REQUEST: "GET_AUTHORIZATION_REQUEST" =
  "GET_AUTHORIZATION_REQUEST";
export const GET_AUTHORIZATION_SUCCESS: "GET_AUTHORIZATION_SUCCESS" =
  "GET_AUTHORIZATION_SUCCESS";
export const GET_AUTHORIZATION_FAILED: "GET_AUTHORIZATION_FAILED" =
  "GET_AUTHORIZATION_FAILED";
export const SET_AUTHORIZATION: "SET_AUTHORIZATION" = "SET_AUTHORIZATION";

export const FORGOT_PASSWORD_REQUEST: "FORGOT_PASSWORD_REQUEST" =
  "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS" =
  "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED: "FORGOT_PASSWORD_FAILED" =
  "FORGOT_PASSWORD_FAILED";
export const SET_FORGOT_PASSWORD: "SET_FORGOT_PASSWORD" = "SET_FORGOT_PASSWORD";

export const GET_USER_REQUEST: "GET_USER_REQUEST" = "GET_USER_REQUEST";
export const GET_USER_SUCCESS: "GET_USER_SUCCESS" = "GET_USER_SUCCESS";
export const GET_USER_FAILED: "GET_USER_FAILED" = "GET_USER_FAILED";

export const LOGOUT_REQUEST: "LOGOUT_REQUEST" = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS: "LOGOUT_SUCCESS" = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED: "LOGOUT_FAILED" = "LOGOUT_FAILED";

export const GET_NEW_PASSWORD_REQUEST: "GET_NEW_PASSWORD_REQUEST" =
  "GET_NEW_PASSWORD_REQUEST";
export const GET_NEW_PASSWORD_SUCCESS: "GET_NEW_PASSWORD_SUCCESS" =
  "GET_NEW_PASSWORD_SUCCESS";
export const GET_NEW_PASSWORD_FAILED: "GET_NEW_PASSWORD_FAILED" =
  "GET_NEW_PASSWORD_FAILED";
export const SET_NEW_PASSWORD: "SET_NEW_PASSWORD" = "SET_NEW_PASSWORD";

export const PATCH_USER_REQUEST: "PATCH_USER_REQUEST" = "PATCH_USER_REQUEST";
export const PATCH_USER_SUCCESS: "PATCH_USER_SUCCESS" = "PATCH_USER_SUCCESS";
export const PATCH_USER_FAILED: "PATCH_USER_FAILED" = "PATCH_USER_FAILED";
export const SET_PATCH_USER: "SET_PATCH_USER" = "SET_PATCH_USER";

export const GET_REGISTER_REQUEST: "GET_REGISTER_REQUEST" =
  "GET_REGISTER_REQUEST";
export const GET_REGISTER_SUCCESS: "GET_REGISTER_SUCCESS" =
  "GET_REGISTER_SUCCESS";
export const GET_REGISTER_FAILED: "GET_REGISTER_FAILED" = "GET_REGISTER_FAILED";
export const SET_REGISTER: "SET_REGISTER" = "SET_REGISTER";

export interface IGetAutorizationAction {
  readonly type: typeof GET_AUTHORIZATION_REQUEST;
}
export interface IGetAutorizationSuccessAction {
  readonly type: typeof GET_AUTHORIZATION_SUCCESS;
}
export interface IGetAutorizationFailedAction {
  readonly type: typeof GET_AUTHORIZATION_FAILED;
}
export interface ISetAutorizationAction {
  readonly type: typeof SET_AUTHORIZATION;
  payload: object;
}

export interface IForgotPasswordAction {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
}
export interface IForgotPasswordSuccessAction {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}
export interface IForgotPasswordFailedAction {
  readonly type: typeof FORGOT_PASSWORD_FAILED;
}
export interface ISetForgotPasswordAction {
  readonly type: typeof SET_FORGOT_PASSWORD;
  payload: TUser;
}

export interface IGetUserAction {
  readonly type: typeof GET_USER_REQUEST;
}
export interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
  form: TUser;
}
export interface IGetUserFailedAction {
  readonly type: typeof GET_USER_FAILED;
}

export interface ILogoutAction {
  readonly type: typeof LOGOUT_REQUEST;
}
export interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
}
export interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_FAILED;
}

export interface IGetNewPasswordAction {
  readonly type: typeof GET_NEW_PASSWORD_REQUEST;
}
export interface IGetNewPasswordSuccessAction {
  readonly type: typeof GET_NEW_PASSWORD_SUCCESS;
}
export interface IGetNewPasswordFailedAction {
  readonly type: typeof GET_NEW_PASSWORD_FAILED;
}
export interface ISetNewPasswordAction {
  readonly type: typeof SET_NEW_PASSWORD;
  payload: TUser;
}

export interface IPatchUserAction {
  readonly type: typeof PATCH_USER_REQUEST;
}
export interface IPatchUserSuccessAction {
  readonly type: typeof PATCH_USER_SUCCESS;
  form: TUser;
}
export interface IPatchUserFailedAction {
  readonly type: typeof PATCH_USER_FAILED;
}
export interface ISetPatchUserAction {
  readonly type: typeof SET_PATCH_USER;
  payload: TUser;
}

export interface IGetRegisterAction {
  readonly type: typeof GET_REGISTER_REQUEST;
}
export interface IGetRegisteSuccessrAction {
  readonly type: typeof GET_REGISTER_SUCCESS;
  form: TUser;
}
export interface IGetRegisterfailedAction {
  readonly type: typeof GET_REGISTER_FAILED;
}
export interface ISetRegisterAction {
  readonly type: typeof SET_REGISTER;
  payload: TUser;
}

export type TAutorizationActions =
  | IGetAutorizationAction
  | IGetAutorizationSuccessAction
  | IGetAutorizationFailedAction
  | ISetAutorizationAction;

export type TForgotPasswordActions =
  | IForgotPasswordAction
  | IForgotPasswordSuccessAction
  | IForgotPasswordFailedAction
  | ISetForgotPasswordAction;

export type TGetUserActions =
  | IGetUserAction
  | IGetUserSuccessAction
  | IGetUserFailedAction;

export type TLogoutActions =
  | ILogoutAction
  | ILogoutSuccessAction
  | ILogoutFailedAction;

export type TGetNewPasswordActions =
  | IGetNewPasswordAction
  | IGetNewPasswordSuccessAction
  | IGetNewPasswordFailedAction
  | ISetNewPasswordAction;

export type TPatchUserActions =
  | IPatchUserAction
  | IPatchUserSuccessAction
  | IPatchUserFailedAction
  | ISetPatchUserAction;

export type TRegisterActions =
  | IGetRegisterAction
  | IGetRegisteSuccessrAction
  | IGetRegisterfailedAction
  | ISetRegisterAction;

export type TUserActions =
  | TAutorizationActions
  | TForgotPasswordActions
  | TGetUserActions
  | TLogoutActions
  | TGetNewPasswordActions
  | TPatchUserActions
  | TRegisterActions;

export const login: AppThunk = (form) => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: GET_AUTHORIZATION_REQUEST,
    });
    try {
      const data = await authorizationRequest(form);
      if (data && data.success) {
        setCookie("token", data.accessToken);
        localStorage.setItem("token", data.refreshToken);
        dispatch({
          type: GET_AUTHORIZATION_SUCCESS,
        });
      } else {
        dispatch({
          type: GET_AUTHORIZATION_FAILED,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: GET_AUTHORIZATION_FAILED,
      });
    }
  };
};

export const getUser: AppThunk = () => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    try {
      const token = getCookie("token");
      const data = await getUserRequest(token);
      if (data?.success) {
        dispatch({
          type: GET_USER_SUCCESS,
          form: data.user,
        });
        dispatch({
          type: PATCH_USER_SUCCESS,
          form: data.user,
        });
      }
    } catch (err) {
      try {
        if (err === "Ошибка: 403") {
          console.log(err);
          deleteCookie("token");
          await updateToken();
          const token = getCookie("token");
          const data = await getUserRequest(token);
          if (data?.success) {
            dispatch({
              type: GET_USER_SUCCESS,
              form: data.user,
            });
            dispatch({
              type: PATCH_USER_SUCCESS,
              form: data.user,
            });
          } else {
            dispatch({ type: GET_USER_FAILED });
          }
        }
      } catch (error) {
        dispatch({ type: GET_USER_FAILED });
      }
    }
  };
};

export const patchUser: AppThunk = (form) => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: PATCH_USER_REQUEST,
    });
    try {
      const data = await patchUserRequest(form);
      if (data && data.success) {
        dispatch({
          type: PATCH_USER_SUCCESS,
          form: data.user,
        });
      }
    } catch (err) {
      try {
        if (err === "Ошибка: 403") {
          await updateToken();
          const data = await patchUserRequest(form);
          if (data && data.success) {
            dispatch({
              type: PATCH_USER_SUCCESS,
              form: data.user,
            });
          }
        }
      } catch (err) {
        dispatch({ type: PATCH_USER_FAILED });
      }
    }
  };
};

export const forgotPassword: AppThunk = (form: TUser) => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    });
    try {
      const data = await forgotPasswordRequest(form);
      if (data && data.success) {
        dispatch({
          type: FORGOT_PASSWORD_SUCCESS,
          form: data.user,
        });
      } else {
        dispatch({
          type: FORGOT_PASSWORD_FAILED,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: FORGOT_PASSWORD_FAILED,
      });
    }
  };
};

export const logout: AppThunk = () => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    try {
      const data = await logoutRequest();
      if (data && data.success) {
        localStorage.removeItem("token");
        deleteCookie("token");
        dispatch({ type: LOGOUT_SUCCESS });
        dispatch({ type: GET_AUTHORIZATION_FAILED });
        dispatch({ type: GET_USER_FAILED });
      } else {
        dispatch({
          type: LOGOUT_FAILED,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: LOGOUT_FAILED,
      });
    }
  };
};

export const getNewPassword: AppThunk = (form) => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: GET_NEW_PASSWORD_REQUEST,
    });
    try {
      const data = await getNewPasswordRequest(form);
      if (data && data.success) {
        dispatch({
          type: GET_NEW_PASSWORD_SUCCESS,
          form: data.user,
        });
      } else {
        dispatch({
          type: GET_NEW_PASSWORD_FAILED,
        });
      }
    } catch (err) {
      dispatch({
        type: GET_NEW_PASSWORD_FAILED,
      });
    }
  };
};

export const register: AppThunk = (form: TUser) => {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: GET_REGISTER_REQUEST,
    });
    try {
      const data = await registerRequest(form);
      if (data && data.success) {
        dispatch({
          type: GET_REGISTER_SUCCESS,
          form: data.user,
        });
      } else {
        dispatch({
          type: GET_REGISTER_FAILED,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: GET_REGISTER_FAILED,
      });
    }
  };
};

export async function updateToken() {
  const token = localStorage.getItem("token");
  const data = await updateTokenRequest(token);
  if (data?.success) {
    setCookie("token", data.accessToken);
    localStorage.setItem("token", data.refreshToken);
  }
}
