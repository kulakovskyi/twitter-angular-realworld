import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { PaginationComponent } from './components/pagination/pagination.component';
import {RouterLink} from "@angular/router";
import {UtilsService} from "../../services/utils.service";

@NgModule({
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    PaginationComponent
  ],
  declarations: [
    PaginationComponent
  ],
  providers: [
    UtilsService
  ]
})

export class PaginationModule{}
