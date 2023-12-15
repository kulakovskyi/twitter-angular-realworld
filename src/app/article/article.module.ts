import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { ArticleComponent } from './components/article/article.component';
import {ArticleService} from "./services/article.service";
import {RouterModule, Routes} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducer";
import {EffectsModule} from "@ngrx/effects";
import {GetArticleEffect} from "./store/effects/get-article.effect";
import {DeleteArticleEffect} from "./store/effects/delete-article.effect";
import {LoadingModule} from "../shared/modules/loading/loading.module";
import {ErrorMessageModule} from "../shared/modules/error-message/error-message.module";
import {TagListModule} from "../shared/modules/tag-list/tag-list.module";
import {FollowButtonModule} from "../shared/modules/follow-button/follow-button.module";
import {AddToFavoriteModule} from "../shared/modules/add-to-favorite/add-to-favorite.module";

const routes: Routes = [
  {path: 'articles/:name', component: ArticleComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    LoadingModule,
    ErrorMessageModule,
    TagListModule,
    FollowButtonModule,
    AddToFavoriteModule
  ],
  declarations: [
    ArticleComponent
  ],
  providers:[
    ArticleService
  ]
})

export class ArticleModule{}
