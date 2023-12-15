import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {UserProfileServices} from "../../services/user-profile.services";
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction
} from "../action/get-user-profile.action";
import {ProfileInterface} from "../../../shared/types/profile.interface";

@Injectable()
export class GetUserProfileEffect {
  constructor(private actions$: Actions,
              private userProfileServices: UserProfileServices) {
  }

  getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserProfileAction),
      switchMap(({ slug}) => {
        return this.userProfileServices.getUserProfile(slug).pipe(
          map((profile: ProfileInterface) => {
            return getUserProfileSuccessAction({profile})
          }),
          catchError((errorResponse: HttpErrorResponse)=>{
            return of(
              getUserProfileFailureAction()
            )
          })
        )
      })
    )
  )

}
