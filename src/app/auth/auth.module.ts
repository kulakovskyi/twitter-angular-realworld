import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducer";
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {RegisterEffect} from "./store/effects/register.effect";
import {PersistanceService} from "../shared/services/persistance.service";
import {BackendErrorMessageModule} from "../shared/modules/backend-error-messages/backend-error-message.module";
import {LoginEffect} from "./store/effects/login.effect";

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackendErrorMessageModule
  ],
    declarations: [
        LoginComponent,
        RegisterComponent,
    ],
  providers: [
    AuthService,
    PersistanceService
  ]
})

export class AuthModule{}
