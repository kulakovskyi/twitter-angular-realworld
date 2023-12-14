import {createAction, props} from "@ngrx/store";
import {ActionType} from "../action-type";

export const getPopularTagsAction =
  createAction(ActionType.GET_TAGS)

export const getPopularTagsSuccessAction =
  createAction(ActionType.GET_TAGS_SUCCESS,
      props<{ data: string[] } >()
    )

export const getPopularTagsFailure =
  createAction(ActionType.GET_TAGS_FAILURE)
