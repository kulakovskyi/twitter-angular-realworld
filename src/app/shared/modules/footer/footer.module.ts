import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { FooterComponent } from './components/footer/footer.component';
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    FooterComponent
  ],
  declarations: [
    FooterComponent
  ]
})

export class FooterModule{}
