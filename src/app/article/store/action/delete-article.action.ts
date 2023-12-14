import {createAction, props} from "@ngrx/store";
import {ActionType} from "../action-type";
import {ArticleInterface} from "../../../shared/types/article.interface";

export const deleteArticleAction =
  createAction(ActionType.DELETE_ARTICLE,
    props<{ name: string }>()
  )

export const deleteArticleSuccessAction =
  createAction(ActionType.DELETE_ARTICLE_SUCCESS)

export const deleteArticleFailureAction =
  createAction(ActionType.DELETE_ARTICLE_FAILURE)
