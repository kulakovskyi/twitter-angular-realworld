import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {GetFeedResponseInterface} from "../../types/get-feed-response.interface";
import {select, Store} from "@ngrx/store";
import {errorSelector, feedSelector, isLoadingSelector} from "../../store/selectors";
import {environment} from "../../../../../../environment/environment.";
import {getFeedAction} from "../../store/actions/get-feed.action";
import queryString from 'query-string';
import {ActivatedRoute, Params, Router} from "@angular/router";


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  @Input() apiUrl!: string

  isLoading$!: Observable<boolean>
  error$!: Observable<string | null>
  feed$!: Observable<GetFeedResponseInterface | null>

  limit = environment.limit
  baseUrl!: string
  currentPage!: number
  queryParamsSubscription$!: Subscription

  constructor(private store: Store,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.initialValue()
    this.initialListeners()
  }

  ngOnChanges(changes: SimpleChanges) {
    const isApiUrlChanged = !changes['apiUrl'].firstChange &&
      changes['apiUrl'].currentValue !== changes['apiUrl'].previousValue
    if (isApiUrlChanged) this.fetchFeed()
  }

  ngOnDestroy() {
    if (this.queryParamsSubscription$) this.queryParamsSubscription$.unsubscribe()
  }

  initialValue() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
    this.baseUrl = this.router.url.split('?')[0]
  }

  initialListeners() {
    this.queryParamsSubscription$ = this.route.queryParams
      .subscribe((params: Params) => {
        this.currentPage = Number(params['page'] || '1')
        this.fetchFeed()
      })
  }

  fetchFeed() {
    const offset = this.currentPage * this.limit - this.limit
    const parsedUrl = queryString.parseUrl(this.apiUrl)
    const stringifyParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query
    })
    const apiUrlWithParams = `${parsedUrl.url}?${stringifyParams}`
    this.store.dispatch(getFeedAction({url: apiUrlWithParams}))
  }

}
