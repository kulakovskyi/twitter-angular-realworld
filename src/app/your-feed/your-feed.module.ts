import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { YourFeedComponent } from './components/your-feed/your-feed.component';
import {RouterModule, Routes} from "@angular/router";
import {BannerModule} from "../shared/modules/banner/banner.module";
import {PopularTagsModule} from "../shared/modules/popular-tags/popular-tags.module";
import {FeedModule} from "../shared/modules/feed/feed.module";
import {FeedToggleModule} from "../shared/modules/feed-toggle/feed-toggle.module";

const routes: Routes = [
  {path: 'feed', component: YourFeedComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BannerModule,
    PopularTagsModule,
    FeedModule,
    FeedToggleModule
  ],
  declarations: [
    YourFeedComponent
  ]
})

export class YourFeedModule{}
