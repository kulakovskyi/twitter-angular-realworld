import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {ArticleInterface} from "../../../shared/types/article.interface";
import {combineLatest, map, Observable, Subscription} from "rxjs";
import {articleSelector, errorSelector, isLoadingSelector} from "../../store/selectors";
import {currentUserSelector} from "../../../auth/store/selectors";
import {CurrentUserInterface} from "../../../shared/types/current-user.interface";
import {getArticleAction} from "../../store/action/get-article.action";
import {deleteArticleAction} from "../../store/action/delete-article.action";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy{
  name!: string
  article!: ArticleInterface | null
  articleSubscription$!: Subscription
  isLoading$!: Observable<boolean>
  error$!: Observable<string| null>
  isAuthor$!: Observable<boolean>

  constructor(private store: Store,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.initialValue()
    this.initialListeners()
    this.fetchData()

  }

  ngOnDestroy() {
    if(this.articleSubscription$) this.articleSubscription$.unsubscribe()
  }

  fetchData(){
    this.store.dispatch(getArticleAction({name: this.name}))
  }

  initialListeners(){
    this.articleSubscription$ = this.store.pipe(select(articleSelector)).subscribe( (article: ArticleInterface | null) => {
      this.article = article
    })
  }

  initialValue(){
    this.name = this.route.snapshot.paramMap.get('name') || '{}'
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))
    ).pipe(
      map(([article, currentUser]: [ArticleInterface | null, CurrentUserInterface | null]) => {
        if(!article || !currentUser){
          return false
        }
        return currentUser.username === article.author.username
      })
    )
  }


  deleteArticle() {
    this.store.dispatch(deleteArticleAction({name: this.name}))
  }
}
