import {createAction, props} from "@ngrx/store";
import {ActionType} from "../action-type";
import {ArticleInterface} from "../../../shared/types/article.interface";


export const getArticleAction =
    createAction(ActionType.GET_ARTICLE,
        props<{slug: string }>()
    )

export const getArticleSuccessAction =
    createAction(ActionType.GET_ARTICLE_SUCCESS,
        props<{ article: ArticleInterface }>()
    )

export const getArticleFailureAction =
    createAction(ActionType.GET_ARTICLE_FAILURE)
