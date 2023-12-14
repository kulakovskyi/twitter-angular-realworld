import {Component, EventEmitter, Input, OnInit, Output, signal} from '@angular/core';
import {BackendErrorsInterface} from "../../../../types/backend-errors.interface";
import {ArticleInputInterface} from "../../../../types/article-input.interface";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit{
  @Input() initialValues!: ArticleInputInterface
  @Input() isSubmitting!: boolean
  @Input() errors!: BackendErrorsInterface | null
  @Output() articleSubmit = new EventEmitter<any>()

  form!: FormGroup
  newForm!: Object


  ngOnInit() {
    this.initialValue()
  }

  initialValue(){
    this.form = new FormGroup({
      title: new FormControl(this.initialValues.title),
      description: new FormControl(this.initialValues.description),
      body: new FormControl(this.initialValues.body),
      tagList: new FormControl(this.initialValues.tagList.join(' ')),
    })
  }

  onSubmit() {
    this.newForm = {article: {...this.form.value}}
    this.articleSubmit.emit(this.newForm)
  }
}
