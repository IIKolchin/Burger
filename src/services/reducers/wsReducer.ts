import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ALL_MESSAGE,
  WS_GET_MESSAGE,
  TWsActions,
} from "../actions/wsActions";
import { TOrder, TOrders } from "../types/data";

type TWsState = {
  wsConnected: Boolean;
  messages: Array<TOrder> ;
  orders: Array<TOrder> ;
  total: number | null,
	totalToday: number | null
}

const initialState: TWsState = {
  wsConnected: false,
  messages: [],
  orders: [],
  total: null,
	totalToday: null
};

export const wsReducer = (state = initialState, action: TWsActions): TWsState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_GET_ALL_MESSAGE:
      return {
        ...state,
        messages: action.payload.orders,
        total: action.payload.total,
				totalToday: action.payload.totalToday
      };
    case WS_GET_MESSAGE:
      return {
        ...state,
        orders: action.payload.orders,
      };

    default:
      return state;
  }
};
