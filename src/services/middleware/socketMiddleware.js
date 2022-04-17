import { getCookie } from "../../utils/cookie";


export const socketMiddleware = (wsUrl, wsActions) => {
    return store => {
      let socket = null;
  const token = getCookie('token')?.split('Bearer ')[1];
  console.log(token)
      return next => action => {
        const { dispatch, getState } = store;
        const { type, payload } = action;
        const { wsInit, wsAll, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;
     if ( type === wsAll) {
        socket = new WebSocket(`${wsUrl}/all`);
     } else if (type === wsInit && token) {
          socket = new WebSocket(`${wsUrl}?token=${token}`);
        } 
        if (socket) {
          socket.onopen = event => {
            dispatch({ type: onOpen, payload: event });
          };
  
          socket.onerror = event => {
            dispatch({ type: onError, payload: event });
          };
  
          socket.onmessage = event => {
            const { data } = event;
            const parsedData = JSON.parse(data);
            const { success, ...restParsedData } = parsedData;
  
            dispatch({ type: onMessage, payload: restParsedData });
          };
  
          socket.onclose = event => {
            dispatch({ type: onClose, payload: event });
          };
  
          if (type === wsSendMessage) {
           const message = token ? { ...payload, token } : { ...payload };;
            message.token = token;
            socket.send(JSON.stringify(message));
          }
        }
  
        next(action);
      };
    };
  };