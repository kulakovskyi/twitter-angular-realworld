import {Component, OnInit} from '@angular/core';
import {ArticleInputInterface} from "../../../shared/types/article-input.interface";
import {Observable} from "rxjs";
import {BackendErrorsInterface} from "../../../shared/types/backend-errors.interface";
import {select, Store} from "@ngrx/store";
;
import {createArticleAction} from "../../store/action/create-article.action";
import {isSubmittingSelector, validationErrorsSelector} from "../../store/selectors";


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit{
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: []
  }

  isSubmitting$!: Observable<any>
  backendErrors$!: Observable<BackendErrorsInterface | null>

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(articleInput: ArticleInputInterface){
    this.store.dispatch(createArticleAction({articleInput}))
  }

}
