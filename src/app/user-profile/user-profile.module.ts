import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {RouterModule, Routes} from "@angular/router";
import {UserProfileServices} from "./services/user-profile.services";
import {EffectsModule} from "@ngrx/effects";
import {GetUserProfileEffect} from "./store/effects/get-user-profile.effect";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import {FeedModule} from "../shared/modules/feed/feed.module";

const routes: Routes = [
  {path: 'profiles/:slug', component: UserProfileComponent},
  {path: 'profiles/:slug/favorites', component: UserProfileComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('userProfile', reducers),
    EffectsModule.forFeature([GetUserProfileEffect]),
    FeedModule
  ],
  declarations: [
    UserProfileComponent
  ],
  providers: [
    UserProfileServices
  ]
})

export class UserProfileModule{}
