import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { AddToFavoriteComponent } from './components/add-to-favorite/add-to-favorite.component';
import {AddToFavoriteService} from "./services/add-to-favorite.service";
import {EffectsModule} from "@ngrx/effects";
import {AddToFavouritesEffect} from "./store/effects/add-to-favourites.effect";

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([AddToFavouritesEffect])
  ],
  exports: [
    AddToFavoriteComponent
  ],
  declarations: [
    AddToFavoriteComponent
  ],
  providers:[
    AddToFavoriteService
  ]
})

export class AddToFavoriteModule{}
