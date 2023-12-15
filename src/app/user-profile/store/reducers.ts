import {EditArticleStateInterface} from "../../edit-article/types/edit-article-state.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction
} from "../../edit-article/store/action/update-article.action";
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction
} from "../../edit-article/store/action/get-article.action";
import {UserProfileStateInterface} from "../types/user-profile-state.interface";
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction
} from "./action/get-user-profile.action";

const initialState: UserProfileStateInterface = {
  data: null,
  isLoading: false,
  error: null
}

const userProfileReducer = createReducer(
  initialState,
  on(
    getUserProfileAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: true,
      error: null
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
      data: action.profile
    })
  ),
  on(
    getUserProfileFailureAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),

)

export function reducers(state: UserProfileStateInterface, action: Action) {
  return userProfileReducer(state, action)
}
