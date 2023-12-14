import {CreateArticleStateInterface} from "../types/create-article-state.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction
} from "./action/create-article.action";

const initialState : CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null
}

const createArticleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    createArticleSuccessAction,
    (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: null
    })
  ),
  on(
    createArticleFailureAction,
    (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
)

export function reducers(state: CreateArticleStateInterface, action: Action) {
  return createArticleReducer(state, action)
}
