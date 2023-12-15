import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { FollowButtonComponent } from './components/follow-button/follow-button.component';
import {FollowButtonService} from "./services/follow-button.service";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FollowButtonComponent
  ],
  declarations: [
    FollowButtonComponent
  ],
  providers:[
    FollowButtonService
  ]
})

export class FollowButtonModule{}
