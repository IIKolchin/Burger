import { HIDE_MODAL, IHideModalAction } from "../actions/modalIngredient";

type TModalState = {
  showModal: boolean;
};

const initialModalState: TModalState = {
  showModal: false,
};

export const modalIngredientReducer = (
  state = initialModalState,
  action: IHideModalAction
): TModalState => {
  switch (action.type) {
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
