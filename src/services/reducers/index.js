import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { orderReducer } from "./order";
import { constructorReducer } from "./constructor";
import { modalIngredientReducer } from "./modalIngredient";
import { registerReducer } from "./register";
import { authorizationReducer } from "./authorization"

export const rootReducer = combineReducers({
  items: ingredientsReducer,
  orderDetails: orderReducer,
  element: constructorReducer,
  modal: modalIngredientReducer,
  register: registerReducer,
  authorization: authorizationReducer
});
