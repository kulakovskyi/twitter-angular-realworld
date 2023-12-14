import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {
  updateArticleAction, updateArticleFailureAction,
  updateArticleSuccessAction
} from "../action/update-article.action";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {ArticleInterface} from "../../../shared/types/article.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {EditArticleService} from "../../services/edit-article.service";

@Injectable()

export class UpdateArticleEffect {
  constructor(private actions$: Actions,
              private editArticleService: EditArticleService,
              private router: Router) {
  }

  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({articleInput, slug}) => {
        return this.editArticleService.updateArticle(articleInput, slug).pipe(
          map((article: ArticleInterface) => {
            return updateArticleSuccessAction({article})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              updateArticleFailureAction({errors: errorResponse.error})
            )
          })
        )
      })
    )
  )

  redirectAfterCreateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleSuccessAction),
      tap(({article}) => {
        this.router.navigate(['/articles', article.slug])
      })
    ),
    {dispatch: false}
  )
}
