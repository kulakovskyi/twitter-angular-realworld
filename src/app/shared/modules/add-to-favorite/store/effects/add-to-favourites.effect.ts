import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {
  addToFavouritesAction,
  addToFavouritesFailureAction,
  addToFavouritesSuccessAction
} from "../action/add-to-favourites.action";
import {AddToFavoriteService} from "../../services/add-to-favorite.service";

@Injectable()
export class AddToFavouritesEffect {
  constructor(private actions$: Actions,
              private addToFavoriteService: AddToFavoriteService) {
  }


  addToFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavouritesAction),
      switchMap(({ isFavorited, slug }) => {
        const article$ = isFavorited
          ? this.addToFavoriteService.removeFromFavourites(slug)
          : this.addToFavoriteService.addToFavourites(slug)

        return article$.pipe(
          map((article) => {
            return addToFavouritesSuccessAction({article})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              addToFavouritesFailureAction())
          })
        )
      })
    )
  )



}
