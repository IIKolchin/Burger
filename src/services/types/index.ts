import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from "../store";
import { TAutorizationActions } from "../actions/authorization";
import { TForgotPasswordActions } from "../actions/forgotPassword";
import { TConstructorActions } from "../actions/constructor"



type TApplicationActions = 
| TAutorizationActions
| TConstructorActions
| TForgotPasswordActions


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;