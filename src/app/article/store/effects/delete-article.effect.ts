import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ArticleService} from "../../services/article.service";
import {
  deleteArticleAction,
  deleteArticleFailureAction,
  deleteArticleSuccessAction
} from "../action/delete-article.action";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()

export class DeleteArticleEffect{
  constructor(private actions$: Actions,
              private articleService: ArticleService,
              private router: Router) {
  }

  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({name}) => {
        return this.articleService.deleteArticle(name).pipe(
          map(() => {
            return deleteArticleSuccessAction()
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              deleteArticleFailureAction()
            )
          })
        )
      })
    )
  )

  redirectAfterDelete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleSuccessAction),
      tap(() => {
        this.router.navigate(['/'])
      })
    ),
    {dispatch: false}
  )
}
