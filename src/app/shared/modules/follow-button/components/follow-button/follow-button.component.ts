import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FollowButtonService} from "../../services/follow-button.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.scss']
})
export class FollowButtonComponent implements OnInit, OnDestroy{
  @Input() user!: string
  @Input() isFollow! : boolean
  @Input() slug!: string
  fSub$!: Subscription
  unfSub$!: Subscription

  constructor(private followButtonService: FollowButtonService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    if(this.slug){
      console.log(this.slug)
    } else {
      this.slug = this.route.snapshot.paramMap.get('slug') || '{}'
    }


  }

  ngOnDestroy() {
    if(this.fSub$) this.fSub$.unsubscribe()
    if(this.unfSub$) this.unfSub$.unsubscribe()
  }

  handleFollow() {
    if(!this.isFollow){
      this.isFollow = !this.isFollow
      this.fSub$ = this.followButtonService.follow(this.slug).subscribe()
    } else {
      this.isFollow = !this.isFollow
      this.unfSub$ = this.followButtonService.unFollow(this.slug).subscribe()
    }
  }
}
