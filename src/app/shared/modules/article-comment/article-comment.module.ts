import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { ArticleCommentComponent } from './components/article-comment/article-comment.component';
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterLink
  ],
  declarations: [
    ArticleCommentComponent
  ]
})

export class ArticleCommentModule{}
