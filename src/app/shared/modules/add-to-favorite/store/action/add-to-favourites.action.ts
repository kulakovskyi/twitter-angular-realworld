import {createAction, props} from "@ngrx/store";
import {ActionType} from "../action-type";
import {ArticleInterface} from "../../../../types/article.interface";

export const addToFavouritesAction =
  createAction(ActionType.ADD_TO_FAVOURITES,
    props<{ isFavorited: boolean, slug: string }>()
  )

export const addToFavouritesSuccessAction =
  createAction(ActionType.ADD_TO_FAVOURITES_SUCCESS,
    props<{ article: ArticleInterface }>()
  )

export const addToFavouritesFailureAction =
  createAction(ActionType.ADD_TO_FAVOURITES_FAILURE)


