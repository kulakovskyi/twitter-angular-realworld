import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';
import { RouterModule, Routes} from "@angular/router";
import {BannerModule} from "../shared/modules/banner/banner.module";
import {FeedToggleModule} from "../shared/modules/feed-toggle/feed-toggle.module";
import {FeedModule} from "../shared/modules/feed/feed.module";
import {PopularTagsModule} from "../shared/modules/popular-tags/popular-tags.module";

const routes: Routes = [
  {path: 'tags/:name', component: TagFeedComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BannerModule,
    FeedToggleModule,
    FeedModule,
    PopularTagsModule
  ],
  declarations: [
    TagFeedComponent
  ]
})

export class TagFeedModule{}
