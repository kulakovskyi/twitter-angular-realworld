import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {PersistanceService} from "../../../shared/services/persistance.service";
import {registerAction, registerFailureAction, registerSuccessAction} from "../actions/register.action";
import {catchError, map, of, switchMap} from "rxjs";
import {CurrentUserInterface} from "../../../shared/types/current-user.interface";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()

export class RegisterEffect{
  constructor(private actions$: Actions,
              private authService: AuthService,
              private persistanceService: PersistanceService,
              private router: Router) {
  }

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('accessToken', currentUser.token)
            return registerSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({errors: errorResponse.error}))
          })
        )
      })
    )
  )
}
