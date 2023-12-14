import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {isLoggedSelector} from "../../../../../auth/store/selectors";

@Component({
  selector: 'app-feed-toggle',
  templateUrl: './feed-toggle.component.html',
  styleUrls: ['./feed-toggle.component.scss']
})
export class FeedToggleComponent implements OnInit{

  @Input('tagName') tagName!: string | null
  isLoggedIn$! : Observable<boolean | null>

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.initialValue()
  }

  initialValue(){
    this.isLoggedIn$ = this.store.pipe(select(isLoggedSelector))
  }
}
