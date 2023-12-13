import {Component, OnInit} from '@angular/core';
import {CurrentUserInterface} from "../../../../types/current-user.interface";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {currentUserSelector, isAnonymousSelector, isLoggedSelector} from "../../../../../auth/store/selectors";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit{
  isLoggedIn$!: Observable<boolean | null>
  isAnonymous$!: Observable<boolean>
  currentUser$!: Observable<CurrentUserInterface | null>

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }

}
