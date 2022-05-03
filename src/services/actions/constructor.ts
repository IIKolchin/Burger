import { TIngredients } from "../types/data";
export const ADD_ITEM: "ADD_ITEM" = "ADD_ITEM";
export const DELETE_ITEM: "DELETE_ITEM" = "DELETE_ITEM";
export const ADD_BUN: "ADD_BUN" = "ADD_BUN";
export const UPDATE_POSITION_ITEM: "UPDATE_POSITION_ITEM" =
  "UPDATE_POSITION_ITEM";
export const GENERATE_ID: "GENERATE_ID" = "GENERATE_ID";
export const RESET_CONSTRUCTOR: "RESET_CONSTRUCTOR" = "RESET_CONSTRUCTOR";

export interface IAddItemAction {
  readonly type: typeof ADD_ITEM;
  payload: TIngredients;
}
export interface IDeleteItemAction {
  readonly type: typeof DELETE_ITEM;
  index: number;
}
export interface IAddBunAction {
  readonly type: typeof ADD_BUN;
  payload: TIngredients;
  id: string;
  countBun: number;
}
export interface IUpdatepositionAction {
  readonly type: typeof UPDATE_POSITION_ITEM;
  payload: TIngredients[];
}
export interface IGenerateIdAction {
  readonly type: typeof GENERATE_ID;
  payload: string;
}
export interface IResetConstructorAction {
  readonly type: typeof RESET_CONSTRUCTOR;
}

export type TConstructorActions =
  | IAddItemAction
  | IDeleteItemAction
  | IAddBunAction
  | IUpdatepositionAction
  | IGenerateIdAction
  | IResetConstructorAction;
