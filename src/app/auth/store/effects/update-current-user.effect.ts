import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../../services/auth.service";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {CurrentUserInterface} from "../../../shared/types/current-user.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction
} from "../actions/update-current-user.action";

@Injectable()

export class UpdateCurrentUserEffect{
  constructor(private actions$: Actions,
              private authService: AuthService) {
  }

  updateCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({currentUserInput}) => {
        return this.authService.updateCurrentUser(currentUserInput).pipe(
          map((currentUser: CurrentUserInterface) => {
            return updateCurrentUserSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              updateCurrentUserFailureAction({errors: errorResponse.error})
            )
          })
        )
      })
    )
  )

}
