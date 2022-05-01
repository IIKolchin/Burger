import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  TIngredientsActions,
} from "../actions/ingredients";
import { TIngredients } from "../types/data";

type TIngredientState = {
  data: Array<TIngredients>;
  dataRequest: boolean;
  dataFailed: boolean;
}

const initialState: TIngredientState = {
  data: [],
  dataRequest: false,
  dataFailed: false,
};

export const ingredientsReducer= (state = initialState, action: TIngredientsActions): TIngredientState => {
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
      return { ...state, data: [], dataFailed: true, dataRequest: false };
    }

    default: {
      return state;
    }
  }
};
