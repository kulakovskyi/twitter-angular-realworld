import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { FeedToggleComponent } from './components/feed-toggle/feed-toggle.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        FeedToggleComponent
    ],
    declarations: [
        FeedToggleComponent
    ]
})

export class FeedToggleModule{}
