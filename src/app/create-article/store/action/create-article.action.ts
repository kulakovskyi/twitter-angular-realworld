import {createAction, props} from "@ngrx/store";
import {ActionType} from "../action-type";
import {ArticleInputInterface} from "../../../shared/types/article-input.interface";
import {ArticleInterface} from "../../../shared/types/article.interface";
import {BackendErrorsInterface} from "../../../shared/types/backend-errors.interface";

export const createArticleAction =
  createAction(ActionType.CREATE_ARTICLE,
    props<{ articleInput: ArticleInputInterface }>()
    )

export const createArticleSuccessAction =
  createAction(ActionType.CREATE_ARTICLE_SUCCESS,
    props<{ article: ArticleInterface }>()
    )

export const createArticleFailureAction =
  createAction(ActionType.CREATE_ARTICLE_FAILURE,
    props<{ errors: BackendErrorsInterface }>()
    )
