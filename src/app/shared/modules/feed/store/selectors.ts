import {createFeatureSelector, createSelector} from "@ngrx/store";
import {FeedStateInterface} from "../types/feed-state.interface";

export const feedFeatureSelector
  = createFeatureSelector<FeedStateInterface>('feed')

export const isLoadingSelector =
  createSelector(feedFeatureSelector,
    feedState => feedState.isLoading
  )

export const errorSelector =
  createSelector(feedFeatureSelector,
    feedState => feedState.error
  )

export const feedSelector =
  createSelector(feedFeatureSelector,
    feedState => feedState.data
  )

