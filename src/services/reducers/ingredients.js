import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  ADD_ITEM,
  DELETE_ITEM,
  ADD_BUN,
  UPDATE_POSITION_ITEM,
  SHOW_MODAL,
  HIDE_MODAL,

} from "../actions/ingredients";

const initialState = {
  data: [],
  constructor: [],
  bun: {},
  dataRequest: false,
  dataFailed: false,
  showModal: false,
  shortModal: false,
  ingredient: {}

};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        dataRequest: true,
        dataFailed: false,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        dataFailed: false,
        data: action.data,
        dataRequest: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...state, dataFailed: true, dataRequest: false };
    }
    case ADD_ITEM: {
      return {
        ...state,
        constructor: [
          ...state.constructor,
          ...state.data.filter(
            (item) => item._id === action.id && item.type !== "bun"
          ),
        ],
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        constructor: [...state.constructor].filter(
          (item, index) => index !== action.index
        ),
      };
    }
    case ADD_BUN: {
      return {
        ...state,
        bun: state.data.find(
          (item) => item._id === action.id && item.type === "bun"
        ),
      };
    }
    case UPDATE_POSITION_ITEM: {
      return {
        ...state,
        constructor: action.constructor,
      };
    }
    case SHOW_MODAL: {
      return {
        ...state,
        showModal: true,
        shortModal: true,
        ingredient: state.data.find(
            (item) => item._id === action.id)
      };
    }

    case HIDE_MODAL: {
      return {
        ...state,
        showModal: false,
        shortModal: false,
      };
    }
    default: {
      return state;
    }
  }
};
