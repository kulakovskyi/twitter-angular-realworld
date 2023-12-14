import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import {RouterModule, Routes} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import {EffectsModule} from "@ngrx/effects";
import {GetArticleEffect} from "./store/effects/get-article.effect";
import {UpdateArticleEffect} from "./store/effects/update-article.effect";
import {EditArticleService} from "./services/edit-article.service";
import {ArticleService} from "../article/services/article.service";
import {LoadingModule} from "../shared/modules/loading/loading.module";
import {ArticleFormModule} from "../shared/modules/article-form/article-form.module";

const routes: Routes = [
  {path: 'articles/:slug/edit', component: EditArticleComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('editArticle', reducers),
    EffectsModule.forFeature([GetArticleEffect, UpdateArticleEffect]),
    LoadingModule,
    ArticleFormModule
  ],
  declarations: [
    EditArticleComponent
  ],
  providers:[
    EditArticleService,
    ArticleService
  ]
})

export class EditArticleModule{}
