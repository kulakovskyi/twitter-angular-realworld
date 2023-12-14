import {createAction, props} from "@ngrx/store";
import {ActionType} from "../action-type";
import {ArticleInputInterface} from "../../../shared/types/article-input.interface";
import {ArticleInterface} from "../../../shared/types/article.interface";
import {BackendErrorsInterface} from "../../../shared/types/backend-errors.interface";

export const updateArticleAction =
  createAction(ActionType.UPDATE_ARTICLE,
    props<{ slug: string, articleInput: ArticleInputInterface }>()
    )

export const updateArticleSuccessAction =
  createAction(ActionType.UPDATE_ARTICLE_SUCCESS,
    props<{ article: ArticleInterface }>()
    )

export const updateArticleFailureAction =
  createAction(ActionType.UPDATE_ARTICLE_FAILURE,
    props<{ errors: BackendErrorsInterface }>()
    )
