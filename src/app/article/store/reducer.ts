import {ArticleStateInterface} from "../types/article-state.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {getArticleAction, getArticleFailureAction, getArticleSuccessAction} from "./action/get-article.action";
import {
  deleteArticleAction,
  deleteArticleFailureAction,
  deleteArticleSuccessAction
} from "./action/delete-article.action";
import {state} from "@angular/animations";

const initialState: ArticleStateInterface = {
  isLoading: true,
  error: null,
  data: null
}

const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state) => ({
      ...state,
      isLoading: true,
      data: null
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action) => ({
      ...state,
      isLoading: false,
      data: action.article
    })
  ),
  on(
    getArticleFailureAction,
    (state, action) => ({
      ...state,
      isLoading: false,
    })
  ),

  on(
    deleteArticleAction,
    (state) => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    deleteArticleSuccessAction,
    (state) => ({
      ...state,
      isLoading: false,
      data: null
    })
  ),
  on(
    deleteArticleFailureAction,
    (state) => ({
      ...state,
      isLoading: false
    })
  )
)

export function reducers(state: ArticleStateInterface, action: Action){
  return articleReducer(state, action)
}
