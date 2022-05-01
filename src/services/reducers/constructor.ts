import {
  ADD_ITEM,
  DELETE_ITEM,
  ADD_BUN,
  UPDATE_POSITION_ITEM,
  GENERATE_ID,
  RESET_CONSTRUCTOR,
  TConstructorActions,
} from "../actions/constructor";
import { TConstructorItem, TIngredients } from "../types/data";

type TConstructorState = {
  constructor: ReadonlyArray<TIngredients>;  
  generateId: string[];
  bun: TIngredients | null;
  ingredient: TIngredients | null;
  // countBun: string[]
}

const initialConstructorState: TConstructorState = {
  constructor: [],
  generateId: [],
  bun: null,
  ingredient: null,
  // countBun: [],
};

export const constructorReducer = (state = initialConstructorState, action: TConstructorActions): TConstructorState => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        constructor: [...state.constructor, action.payload],
      };
    }
    case GENERATE_ID: {
      return {
        ...state,
        generateId: [...state.generateId, action.payload],
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
        bun: action.payload,
        // countBun: action.id,
      };
    }
    case UPDATE_POSITION_ITEM: {
      return {
        ...state,
        constructor: action.payload,
      };
    }
    case RESET_CONSTRUCTOR: {
      return {
        ...state,
        constructor: [],
        bun: null,
      };
    }

    default: {
      return state;
    }
  }
};
