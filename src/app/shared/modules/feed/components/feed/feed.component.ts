import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {GetFeedResponseInterface} from "../../types/get-feed-response.interface";
import {select, Store} from "@ngrx/store";
import {errorSelector, feedSelector, isLoadingSelector} from "../../store/selectors";
import {environment} from "../../../../../../environment/environment.";
import {getFeedAction} from "../../store/actions/get-feed.action";
import queryString from 'query-string';
import {ActivatedRoute, Params} from "@angular/router";


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit{
  @Input('apiUrl') apiUrlProps! : string

  isLoading$!: Observable<boolean>
  error$!: Observable<string| null>
  feed$!: Observable<GetFeedResponseInterface| null>

  limit = environment.limit
  baseUrl!: string
  currentPage!: number
  queryParamsSubscription!: Subscription

  constructor(private store: Store,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.initialValue()
    this.initialListeners()

  }

  initialValue(){
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
  }

  initialListeners(){
    this.queryParamsSubscription = this.route.queryParams
      .subscribe((params: Params) => {
        this.currentPage = Number(params['page'] || '1')
        this.fetchFeed()
      })
  }

  fetchFeed(){
    const offset = this.currentPage * this.limit - this.limit
    const parsedUrl = queryString.parseUrl(this.apiUrlProps)
    const stringifyParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query
    })
    const apiUrlWithParams = `${parsedUrl.url}?${stringifyParams}`
    this.store.dispatch(getFeedAction({url : apiUrlWithParams}))
  }

}
