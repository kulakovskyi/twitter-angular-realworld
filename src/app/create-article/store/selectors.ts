import {CreateArticleStateInterface} from "../types/create-article-state.interface";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const createArticleFeatureSelector
  = createFeatureSelector<CreateArticleStateInterface>('createArticle')

export const isSubmittingSelector =
  createSelector(createArticleFeatureSelector,
    createArticleState => createArticleState.isSubmitting
  )

export const validationErrorsSelector =
  createSelector(createArticleFeatureSelector,
    createArticleState => createArticleState.validationErrors
  )
