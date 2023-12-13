import {createAction, props} from "@ngrx/store";
import {ActionType} from "../action-type";
import {LoginRequestInterface} from "../../types/login-request.interface";
import {CurrentUserInterface} from "../../../shared/types/current-user.interface";
import {BackendErrorsInterface} from "../../../shared/types/backend-errors.interface";

export const loginAction =
  createAction(ActionType.LOGIN, props<{ request: LoginRequestInterface }>()
  )

export const loginSuccessAction =
  createAction(ActionType.LOGIN_SUCCESS, props<{ currentUser: CurrentUserInterface }>()
  )

export const loginFailureAction =
  createAction(ActionType.LOGIN_FAILURE, props<{ errors: BackendErrorsInterface }>()
  )
