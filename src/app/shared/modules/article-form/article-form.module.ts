import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { ArticleFormComponent } from './components/article-form/article-form.component';
import {BackendErrorMessageModule} from "../backend-error-messages/backend-error-message.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        BackendErrorMessageModule,
        ReactiveFormsModule
    ],
    exports: [
        ArticleFormComponent
    ],
    declarations: [
        ArticleFormComponent
    ]
})

export class ArticleFormModule{}
