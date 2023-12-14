import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ArticleService} from "../../services/article.service";
import {getArticleAction, getArticleFailureAction, getArticleSuccessAction} from "../action/get-article.action";
import {catchError, map, of, switchMap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()

export class GetArticleEffect{
  constructor(private actions$: Actions,
              private articleService: ArticleService) {
  }

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({name}) => {
        return this.articleService.getArticle(name).pipe(
          map(article => {
            return getArticleSuccessAction({article})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getArticleFailureAction()
            )
          })
        )
      })
    )
  )
}
