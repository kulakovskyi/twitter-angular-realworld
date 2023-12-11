import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthStateInterface} from "../types/auth-state.interface";

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth')

export const isSubmittedSelector =
  createSelector(authFeatureSelector,
    authState => authState.isSubmitting)

export const validationErrorsSelector =
  createSelector(authFeatureSelector,
    authState => authState.validationErrors)

