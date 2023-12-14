import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { CreateArticleComponent } from './components/create-article/create-article.component';
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import {EffectsModule} from "@ngrx/effects";
import {CreateArticleEffect} from "./store/effects/create-article.effect";
import {ArticleFormModule} from "../shared/modules/article-form/article-form.module";
import {RouterModule, Routes} from "@angular/router";
import {CreateArticleService} from "./services/create-article.service";

const routes: Routes = [
  {path: 'article/new', component: CreateArticleComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('createArticle', reducers),
    EffectsModule.forFeature([CreateArticleEffect]),
    ArticleFormModule
  ],
  declarations: [
    CreateArticleComponent
  ],
  providers: [
    CreateArticleService
  ]
})

export class CreateArticleModule{}
