import {createAction, props} from "@ngrx/store";
import {ActionType} from "../action-type";
import {CurrentUserInterface} from "../../../shared/types/current-user.interface";
import {BackendErrorsInterface} from "../../../shared/types/backend-errors.interface";
import {CurrentUserInputInterface} from "../../../shared/types/current-user-input.interface";

export const updateCurrentUserAction =
  createAction(ActionType.UPDATE_CURRENT_USER, props<{ currentUserInput: CurrentUserInputInterface }>()
  )

export const updateCurrentUserSuccessAction =
  createAction(ActionType.UPDATE_CURRENT_USER_SUCCESS, props<{ currentUser: CurrentUserInterface }>()
  )

export const updateCurrentUserFailureAction =
  createAction(ActionType.UPDATE_CURRENT_USER_FAILURE, props<{ errors: BackendErrorsInterface }>()
  )
