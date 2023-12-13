import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BackendErrorMessageComponent} from "./components/backend-error-message/backend-error-message.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    BackendErrorMessageComponent
  ],
  declarations: [
    BackendErrorMessageComponent
  ]
})

export class BackendErrorMessageModule{}
