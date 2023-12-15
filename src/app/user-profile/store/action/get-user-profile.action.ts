import {ActionType} from "../action-type";
import {createAction, props} from "@ngrx/store";
import {ProfileInterface} from "../../../shared/types/profile.interface";

export const getUserProfileAction =
  createAction(ActionType.GET_USER_PROFILE,
    props<{ slug: string }>()
  )

export const getUserProfileSuccessAction =
  createAction(ActionType.GET_USER_PROFILE_SUCCESS,
    props<{ profile: ProfileInterface }>()
  )

export const getUserProfileFailureAction =
  createAction(ActionType.GET_USER_PROFILE_FAILURE)
