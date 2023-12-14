import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { FeedToggleComponent } from './components/feed-toggle/feed-toggle.component';
import {RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
    exports: [
        FeedToggleComponent
    ],
    declarations: [
        FeedToggleComponent
    ]
})

export class FeedToggleModule{}
