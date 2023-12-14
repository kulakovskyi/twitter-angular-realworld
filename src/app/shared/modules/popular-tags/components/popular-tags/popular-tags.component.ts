import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {getPopularTagsAction} from "../../store/action/get-popular-tags.action";
import {errorSelector, isLoadingSelector, popularTagsSelector} from "../../store/selectors";

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit{
  popularTags$!: Observable<string[] | null>
  isLoading$!: Observable<boolean>
  error$!: Observable<string | null>

  constructor(private store: Store) {}

  ngOnInit() {
    this.initialValue()
    this.fetchData()
  }

  initialValue(){
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  fetchData(){
    this.store.dispatch(getPopularTagsAction())
  }
}
