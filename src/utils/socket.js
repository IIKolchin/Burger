import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_ALL_START,
    WS_CONNECTION_SUCCESS,
    WS_GET_MESSAGE,
    WS_GET_ALL_MESSAGE,
    WS_SEND_MESSAGE
  } from '../services/actions/wsActions';


const wsUrl = 'wss://norma.nomoreparties.space/orders';
const wsActions = {
  wsAll: WS_CONNECTION_ALL_START,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_ALL_MESSAGE
};

const wsUserActions = {
  wsInit: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE
};

export {wsUrl, wsActions, wsUserActions }