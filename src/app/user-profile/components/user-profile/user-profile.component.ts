import {Component, OnInit} from '@angular/core';
import {combineLatest, filter, map, Observable, Subscription} from "rxjs";
import {ProfileInterface} from "../../../shared/types/profile.interface";
import {select, Store} from "@ngrx/store";
import {errorSelector, isLoadingSelector, userProfileSelector} from "../../store/selectors";
import {getUserProfileAction} from "../../store/action/get-user-profile.action";
import {ActivatedRoute, Router} from "@angular/router";
import {currentUserSelector} from "../../../auth/store/selectors";
import {CurrentUserInterface} from "../../../shared/types/current-user.interface";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{
  slug!: string
  userProfile!: ProfileInterface | null
  userProfileSubscription$!: Subscription
  isLoading$!: Observable<boolean>
  isCurrentUserProfile$!: Observable<boolean>
  error$!: Observable<string| null>
  apiUrl!: string

  constructor(private store: Store,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.initialValue()
    this.initialListeners()
    this.fetchData()
  }

  initialListeners(){
    this.userProfileSubscription$ = this.store.pipe(select(userProfileSelector))
      .subscribe((userProfile: ProfileInterface | null) => {
        this.userProfile = userProfile
      })
  }

  fetchData(){
    this.store.dispatch(getUserProfileAction({slug: this.slug}))
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites')
    return isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`
  }

  initialValue(){
    const isFavorites = this.router.url.includes('favorites')
    this.slug = this.route.snapshot.paramMap.get('slug') || '{}'
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.apiUrl = isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`;

    this.isCurrentUserProfile$ = combineLatest(
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean))
    ).pipe(
      map(([currentUser, userProfile] : [CurrentUserInterface, ProfileInterface]) => {
        return currentUser.username === userProfile.username
    })

    )
  }

}
