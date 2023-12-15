import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {addToFavouritesAction} from "../../store/action/add-to-favourites.action";

@Component({
  selector: 'app-add-to-favorite',
  templateUrl: './add-to-favorite.component.html',
  styleUrls: ['./add-to-favorite.component.scss']
})
export class AddToFavoriteComponent implements OnInit{
  @Input() isFavorited!: boolean
  @Input() articleSlug!: string
  @Input() favoritesCount!: number

  constructor(private store: Store) {
  }


  ngOnInit() {

  }

  handleClick() {
    this.store.dispatch(addToFavouritesAction({isFavorited: this.isFavorited, slug: this.articleSlug}))
    if(this.isFavorited) {
      this.favoritesCount = this.favoritesCount - 1
    } else {
      this.favoritesCount = this.favoritesCount + 1
    }
    this.isFavorited = !this.isFavorited
  }
}
