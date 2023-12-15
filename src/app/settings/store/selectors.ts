import {createFeatureSelector, createSelector} from "@ngrx/store";
import {SettingsStateInterface} from "../types/settings-state.interface";

export const settingsFeatureSelector =
  createFeatureSelector<SettingsStateInterface>('settings')

export const isSubmittedSelector =
  createSelector(settingsFeatureSelector,
    settingsState => settingsState.isSubmitting)

export const validationErrorsSelector =
  createSelector(settingsFeatureSelector,
    settingsState => settingsState.validationErrors)
