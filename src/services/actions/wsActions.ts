

export const WS_CONNECTION_START: "WS_CONNECTION_START" = "WS_CONNECTION_START";
export const WS_CONNECTION_ALL_START: "WS_CONNECTION_ALL_START" = "WS_CONNECTION_ALL_START";
export const WS_CONNECTION_SUCCESS: "WS_CONNECTION_SUCCESS" = "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR: "WS_CONNECTION_ERROR" = "WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED: "WS_CONNECTION_CLOSED" = "WS_CONNECTION_CLOSED";
export const WS_GET_MESSAGE: "WS_GET_MESSAGE" = "WS_GET_MESSAGE";
export const WS_GET_ALL_MESSAGE: "WS_GET_ALL_MESSAGE" = "WS_GET_ALL_MESSAGE";


export interface IwsAction {
  readonly type: typeof WS_CONNECTION_START;
  readonly payload: object;
}
export interface IwsAllAction {
  readonly type: typeof WS_CONNECTION_ALL_START;
}
export interface IwsSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}
export interface IwsErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
}
export interface IwsClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}
export interface IwsGetMessageAction {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: object
}
export interface IwsGetAllMessageAction {
  readonly type: typeof WS_GET_ALL_MESSAGE;
  readonly payload: object
}

export type TWsActions =
| IwsAction
| IwsAllAction
| IwsSuccessAction
| IwsErrorAction
| IwsClosedAction
| IwsGetMessageAction
| IwsGetAllMessageAction

export const wsConnectionStart = (token: string): IwsAction => {
  return {
    type: WS_CONNECTION_START,
    payload: { token },
  };
};

export const wsConnectionAllStart = (): IwsAllAction => {
  return {
    type: WS_CONNECTION_ALL_START,
  };
};

export const wsConnectionSuccess = (): IwsSuccessAction => {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
};

export const wsConnectionError = (): IwsErrorAction => {
  return {
    type: WS_CONNECTION_ERROR,
  };
};

export const wsConnectionClosed = (): IwsClosedAction => {
  return {
    type: WS_CONNECTION_CLOSED,
  };
};

export const wsGetAllMessage = (message: object): IwsGetAllMessageAction => {
  return {
    type: WS_GET_ALL_MESSAGE,
    payload: message,
  };
};

export const wsGetMessage = (message: object): IwsGetMessageAction => {
  return {
    type: WS_GET_MESSAGE,
    payload: message,
  };
};
