import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../../services/auth.service";
import {PersistanceService} from "../../../shared/services/persistance.service";
import {Router} from "@angular/router";
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from "../actions/get-current-user.action";
import {catchError, map, of, switchMap} from "rxjs";
import {CurrentUserInterface} from "../../../shared/types/current-user.interface";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()

export class GetCurrentUserEffect{

  constructor(private actions$: Actions,
              private authService: AuthService,
              private persistanceService: PersistanceService,
              private router: Router) {
  }

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('accessToken')
        if(!token){
          return of(getCurrentUserFailureAction())
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getCurrentUserFailureAction())
          })
        )
      })
    )
  )
}
