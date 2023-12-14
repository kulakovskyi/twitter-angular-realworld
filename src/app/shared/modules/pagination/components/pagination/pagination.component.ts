import {Component, Input, OnInit} from '@angular/core';
import {UtilsService} from "../../../../services/utils.service";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit{

  @Input() total? : number
  @Input() limit! : number
  @Input() url! : string
  @Input() currentPage! : number

  pagesCount!: number
  pages!: number[]

  constructor(private utilsService: UtilsService) {
  }


  ngOnInit() {
    this.pagesCount = Math.ceil((this.total || 0) / this.limit)
    this.pages = this.utilsService.range(1, this.pagesCount)
  }

}
