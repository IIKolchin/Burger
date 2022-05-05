import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { store } from "../store";
import { TConstructorActions } from "../actions/constructor";
import { TIngredientsActions } from "../actions/ingredients";
import { IHideModalAction } from "../actions/modalIngredient";
import { TOrderActions } from "../actions/order";
import { TWsActions } from "../actions/wsActions";
import { TUserActions } from "../actions/user";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";

export type TApplicationActions =
  | TUserActions
  | TConstructorActions
  | TIngredientsActions
  | IHideModalAction
  | TOrderActions
  | TWsActions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();
