import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../../services/auth.service";
import {PersistanceService} from "../../../shared/services/persistance.service";
import {Router} from "@angular/router";
import {loginAction, loginFailureAction, loginSuccessAction} from "../actions/login.action";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {CurrentUserInterface} from "../../../shared/types/current-user.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {registerSuccessAction} from "../actions/register.action";

@Injectable()

export class LoginEffect{
  constructor(private actions$: Actions,
              private authService: AuthService,
              private persistanceService: PersistanceService,
              private router: Router) {
  }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('accessToken', currentUser.token)
            return loginSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loginFailureAction({errors: errorResponse.error})
            )
          })
        )
      })
    )
  )

  redirectAfterSubmit$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigate(['/'])
        })
      ),
    {dispatch: false}
  )
}
