import { SHOW_MODAL, HIDE_MODAL } from "../actions/modalIngredient";

const initialModalState = {
  showModal: false,
  shortModal: false,
  ingredient: {},
};

export const modalIngredientReducer = (state = initialModalState, action) => {
  switch (action.type) {
    case SHOW_MODAL: {
      return {
        ...state,
        showModal: true,
        shortModal: true,
        ingredient: action.payload,
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
