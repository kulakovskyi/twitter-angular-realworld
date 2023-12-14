import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {ArticleInterface} from "../../../shared/types/article.interface";
import {getArticleAction, getArticleFailureAction, getArticleSuccessAction} from "../action/get-article.action";
import {ArticleService} from "../../../article/services/article.service";

@Injectable()
export class GetArticleEffect {
  constructor(private actions$: Actions,
              private articleServices: ArticleService) {
  }

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug}) => {
        return this.articleServices.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({article})
          }),
          catchError((errorResponse: HttpErrorResponse)=>{
            return of(
              getArticleFailureAction()
            )
          })
        )
      })
    )
  )

}
