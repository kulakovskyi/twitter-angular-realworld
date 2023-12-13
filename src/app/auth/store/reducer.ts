import {AuthStateInterface} from "../types/auth-state.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {registerAction, registerFailureAction, registerSuccessAction} from "./actions/register.action";
import {loginAction, loginFailureAction, loginSuccessAction} from "./actions/login.action";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    registerSuccessAction,
    (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: null,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    registerFailureAction,
    (state, action) => ({
      ...state,
      isLoggedIn: false,
      validationErrors: action.errors
    })
  ),

  on(
    loginAction,
    (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    loginSuccessAction,
    (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: null,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    loginFailureAction,
    (state, action) => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: false,
      validationErrors: action.errors
    })
  )
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
