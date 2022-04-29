import { HIDE_MODAL, IHideModalAction } from "../actions/modalIngredient";

type TModalState = {
  showModal: boolean;
}

const initialModalState: TModalState = {
  showModal: false,
  // ingredient: {},
};

export const modalIngredientReducer = (state = initialModalState, action: IHideModalAction): TModalState => {
  switch (action.type) {
    // case SHOW_MODAL: {
    //   return {
    //     ...state,
    //     showModal: true,
    //     ingredient: action.payload,
    //   };
    // }

    case HIDE_MODAL: {
      return {
        ...state,
        showModal: false,
      };
    }

    default: {
      return state;
    }
  }
};
