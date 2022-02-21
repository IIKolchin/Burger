import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  SHOW_ORDER,
  CLOSE_ORDER,
} from "../actions/order";

const orderInitialState = {
  order: null,
  showOrder: false,
  orderRequest: false,
  orderFailed: false,
};

export const orderReducer = (state = orderInitialState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderFailed: false,
        order: action.order,
        orderRequest: false,
      };
    }
    case GET_ORDER_FAILED: {
      return { ...state, order: null, orderFailed: true, orderRequest: false };
    }
    case SHOW_ORDER: {
      return {
        ...state,
        showOrder: true,
      };
    }
    case CLOSE_ORDER: {
      return {
        ...state,
        showOrder: false,
      };
    }
    default: {
      return state;
    }
  }
};
