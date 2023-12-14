import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { FeedComponent } from './components/feed/feed.component';
import {FeedService} from "./services/feed.service";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducer";
import {EffectsModule} from "@ngrx/effects";
import {GetFeedEffect} from "./store/effects/get-feed.effect";
import {RouterLink} from "@angular/router";
import {LoadingModule} from "../loading/loading.module";
import {ErrorMessageModule} from "../error-message/error-message.module";
import {PaginationModule} from "../pagination/pagination.module";
import {TagListModule} from "../tag-list/tag-list.module";

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('feed', reducers),
        EffectsModule.forFeature([GetFeedEffect]),
        RouterLink,
        LoadingModule,
        ErrorMessageModule,
        PaginationModule,
        TagListModule
    ],
  exports: [
    FeedComponent
  ],
  declarations: [
    FeedComponent
  ],
  providers:[
    FeedService
  ]
})

export class FeedModule{}
