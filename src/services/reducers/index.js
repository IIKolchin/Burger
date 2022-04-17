import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { orderReducer } from "./order";
import { constructorReducer } from "./constructor";
import { modalIngredientReducer } from "./modalIngredient";
import { registerReducer } from "./register";
import { authorizationReducer } from "./authorization";
import { logoutReducer } from "./logout";
import { newPasswordReducer } from "./newPassword";
import { userReducer } from "./getUser";
import { patchUserReducer } from "./patchUser";
import { forgotPasswordReducer } from "./forgotPassword";
import { connectRouter } from "connected-react-router";
import { wsReducer } from "./wsReducer";


export const rootReducer = (history) =>
  combineReducers({
    items: ingredientsReducer,
    orderDetails: orderReducer,
    element: constructorReducer,
    modal: modalIngredientReducer,
    register: registerReducer,
    authorization: authorizationReducer,
    logout: logoutReducer,
    newPassword: newPasswordReducer,
    user: userReducer,
    patchUser: patchUserReducer,
    forgotPassword: forgotPasswordReducer,
    router: connectRouter(history),
    ws: wsReducer,
  });
