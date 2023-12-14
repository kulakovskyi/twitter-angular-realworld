import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import {RouterModule, Routes} from "@angular/router";
import {FeedModule} from "../shared/modules/feed/feed.module";
import {BannerModule} from "../shared/modules/banner/banner.module";
import {PopularTagsModule} from "../shared/modules/popular-tags/popular-tags.module";
import {FeedToggleModule} from "../shared/modules/feed-toggle/feed-toggle.module";

const routes: Routes = [
  {path: '', component: GlobalFeedComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedToggleModule
  ],
  declarations: [
    GlobalFeedComponent
  ]
})

export class GlobalFeedModule{}
