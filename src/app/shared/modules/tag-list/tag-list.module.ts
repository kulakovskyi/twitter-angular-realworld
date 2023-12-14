import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { TagListComponent } from './components/tag-list/tag-list.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        TagListComponent
    ],
    declarations: [
        TagListComponent
    ]
})

export class TagListModule{}
