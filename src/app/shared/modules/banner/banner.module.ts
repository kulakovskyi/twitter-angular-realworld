import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent
  ],
  declarations: [
    BannerComponent
  ]
})

export class BannerModule{}
