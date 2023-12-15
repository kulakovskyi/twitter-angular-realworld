import {createAction} from "@ngrx/store";
import {ActionType} from "../action-type";

export const logoutAction =
  createAction(ActionType.LOGOUT)
