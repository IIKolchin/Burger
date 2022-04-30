
import { TWSAction } from "../types/data";
import { Middleware, MiddlewareAPI, Dispatch, Action } from 'redux';
import { AppDispatch, RootState } from "../types";

export const socketMiddleware = (wsUrl: string, wsActions: TWSAction): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const {
        wsInit,
        wsAll,
        onOpen,
        onClose,
        onError,
        onMessage,
      } = wsActions;
      if (type === wsAll) {
        socket = new WebSocket(`${wsUrl}/all`);
      } else if (type === wsInit && payload?.token) {
        socket = new WebSocket(`${wsUrl}?token=${payload.token}`);
      }
      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };
      }

      next(action);
    };
  };
};
