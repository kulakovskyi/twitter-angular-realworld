import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { SettingsComponent } from './components/settings/settings.component';
import {RouterModule, Routes} from "@angular/router";
import {BackendErrorMessageModule} from "../shared/modules/backend-error-messages/backend-error-message.module";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";

const routes: Routes = [
  {path: 'settings', component: SettingsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducers),
    BackendErrorMessageModule,
    ReactiveFormsModule
  ],
  declarations: [
    SettingsComponent
  ]
})

export class SettingsModule{}
