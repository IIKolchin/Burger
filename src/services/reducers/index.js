import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { orderReducer } from "./order";
import {constructorReducer} from "./constructor";
import {modalIngredientReducer} from "./modalIngredient"

export const rootReducer = combineReducers({
  items: ingredientsReducer,
  orderDetails: orderReducer,
  element: constructorReducer,
  modal: modalIngredientReducer,
});
