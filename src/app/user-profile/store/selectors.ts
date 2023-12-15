import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserProfileStateInterface} from "../types/user-profile-state.interface";

export const userProfileFeatureSelector =
  createFeatureSelector<UserProfileStateInterface>('userProfile')

export const isLoadingSelector =
  createSelector(userProfileFeatureSelector,
    userProfileState => userProfileState.isLoading
    )

export const errorSelector =
  createSelector(userProfileFeatureSelector,
    userProfileState => userProfileState.error
  )

export const userProfileSelector =
  createSelector(userProfileFeatureSelector,
    userProfileState => userProfileState.data
    )
