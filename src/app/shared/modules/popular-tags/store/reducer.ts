import {PopularTagsStateInterface} from "../types/popular-tags-state.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {
  getPopularTagsAction,
  getPopularTagsFailure,
  getPopularTagsSuccessAction
} from "./action/get-popular-tags.action";

const initialState: PopularTagsStateInterface = {
  isLoading: true,
  error: null,
  data: null
}

const getPopularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state) => ({
      ...state,
      isLoading: true,
      data: null
    })
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action) => ({
      ...state,
      isLoading: false,
      data: action.data
    })
  ),
  on(
    getPopularTagsFailure,
    (state, action) => ({
      ...state,
      isLoading: false,
      data: null
    })
  )
)

export function reducers(state: PopularTagsStateInterface, action: Action){
  return getPopularTagsReducer(state, action)
}
