import {Component, OnInit} from '@angular/core';
import {filter, map, Observable} from "rxjs";
import {BackendErrorsInterface} from "../../../shared/types/backend-errors.interface";
import {select, Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {getArticleAction} from "../../store/action/get-article.action";
import {articleSelector, isSubmittingSelector, validationErrorsSelector} from "../../store/selectors";
import {ArticleInterface} from "../../../shared/types/article.interface";
import {updateArticleAction} from "../../store/action/update-article.action";
import {ArticleInputInterface} from "../../../shared/types/article-input.interface";

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit{
  initialValues$!: Observable<any>
  isSubmitting$!: Observable<boolean>
  isLoading$!: Observable<boolean>
  backendErrors$!: Observable<BackendErrorsInterface | null>
  slug!: string

  constructor(private store: Store,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.initialValue()
    this.fetchData()
  }

  onSubmit(articleInput: ArticleInputInterface){
    this.store.dispatch(updateArticleAction({slug: this.slug, articleInput}))
  }

  initialValue(){
    this.slug = this.route.snapshot.paramMap.get('slug') || '{}'
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    this.initialValues$ = this.store.pipe(select(articleSelector), filter(Boolean),
      map((article: ArticleInterface) => {
        return{
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList
        }
      })
    )
  }


  fetchData() {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }
}
