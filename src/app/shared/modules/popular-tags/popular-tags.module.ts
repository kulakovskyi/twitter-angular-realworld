import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import {PopularTagsService} from "./services/popular-tags.service";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducer";
import {EffectsModule} from "@ngrx/effects";
import {GetPopularTagsEffect} from "./store/effects/get-popular-tags.effect";
import {LoadingModule} from "../loading/loading.module";
import {ErrorMessageModule} from "../error-message/error-message.module";
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    LoadingModule,
    ErrorMessageModule,
    RouterLink
  ],
  declarations: [
    PopularTagsComponent
  ],
  exports: [
    PopularTagsComponent
  ],
  providers: [
    PopularTagsService
  ]
})

export class PopularTagsModule{}
