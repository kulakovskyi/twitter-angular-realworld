import {createAction, props} from "@ngrx/store";
import {ActionType} from "../action-type";
import {GetFeedResponseInterface} from "../../types/get-feed-response.interface";

export const getFeedAction =
  createAction(ActionType.GET_FEED,

    props<{ url: string }>()
    )

export const getFeedSuccessAction =
  createAction(ActionType.GET_FEED_SUCCESS,
    props<{ feed: GetFeedResponseInterface }>()
    )

export const getFeedFailureAction =
  createAction(ActionType.GET_FEED_FAILURE)
