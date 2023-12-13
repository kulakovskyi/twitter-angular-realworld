import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {getFeedAction, getFeedFailureAction, getFeedSuccessAction} from "../actions/get-feed.action";
import {catchError, map, of, switchMap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {FeedService} from "../../services/feed.service";

@Injectable()
export class GetFeedEffect {
  constructor(private actions$: Actions,
              private feedService: FeedService) {
  }


  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({url}) => {
        return this.feedService.getFeed(url).pipe(
          map((feed) => {
            return getFeedSuccessAction({feed})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getFeedFailureAction())
          })
        )
      })
    )
  )



}
