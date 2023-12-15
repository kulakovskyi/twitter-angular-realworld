import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./article-comment.component.scss']
})
export class ArticleCommentComponent {
  @Input() comment!: any;
  @Output() delete = new EventEmitter<boolean>();


}
