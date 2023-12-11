import {createAction, props} from "@ngrx/store";
import {ActionType} from "../action-type";
import {RegisterRequestInterface} from "../../types/register-request.interface";
import {CurrentUserInterface} from "../../../shared/types/current-user.interface";
import {BackendErrorsInterface} from "../../../shared/types/backend-errors.interface";

export const registerAction =
  createAction(ActionType.REGISTER, props<{request: RegisterRequestInterface}>()
  )

export const registerSuccessAction =
  createAction(ActionType.REGISTER_SUCCESS, props<{ currentUser: CurrentUserInterface }>()
  )

export const registerFailureAction =
  createAction(ActionType.REGISTER_FAILURE, props<{errors: BackendErrorsInterface}>()
  )
