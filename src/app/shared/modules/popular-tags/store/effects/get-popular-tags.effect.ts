import {Injectable} from "@angular/core";
import {PopularTagsService} from "../../services/popular-tags.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  getPopularTagsAction,
  getPopularTagsFailure,
  getPopularTagsSuccessAction
} from "../action/get-popular-tags.action";
import {catchError, map, of, switchMap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()

export class GetPopularTagsEffect{

  constructor(private actions$: Actions,
              private popularTagsService: PopularTagsService) {
  }

  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((data) => {
            return getPopularTagsSuccessAction({data})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getPopularTagsFailure()
            )
          })
        )
      })
    )
  )

}
