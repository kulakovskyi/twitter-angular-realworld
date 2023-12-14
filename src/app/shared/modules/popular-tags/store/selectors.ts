import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PopularTagsStateInterface} from "../types/popular-tags-state.interface";

export const popularTagsFeatureSelector
  = createFeatureSelector<PopularTagsStateInterface>('popularTags')

export const isLoadingSelector =
  createSelector(popularTagsFeatureSelector,
    popularTagState => popularTagState.isLoading
    )

export const errorSelector =
  createSelector(popularTagsFeatureSelector,
    popularTagState => popularTagState.error
    )

export const popularTagsSelector =
  createSelector(popularTagsFeatureSelector,
    popularTagState => popularTagState.data
  )
