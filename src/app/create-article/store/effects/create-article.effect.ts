import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CreateArticleService} from "../../services/create-article.service";
import {Router} from "@angular/router";
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction
} from "../action/create-article.action";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {ArticleInterface} from "../../../shared/types/article.interface";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()

export class CreateArticleEffect{
  constructor(private actions$: Actions,
              private createArticleServices: CreateArticleService,
              private router: Router) {
  }

  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({articleInput}) => {
        return this.createArticleServices.createArticle(articleInput).pipe(
          map((article: ArticleInterface) => {
            return createArticleSuccessAction({article})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createArticleFailureAction({errors: errorResponse.error})
            )
          })
        )
      })
    )
  )

  redirectAfterCreateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleSuccessAction),
      tap(({article}) => {
        this.router.navigate(['/articles', article.slug])
      })
    ),
    {dispatch: false}
  )
}
