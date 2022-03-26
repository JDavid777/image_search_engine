import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  @Input() page: number = 0;
  @Input() total: number = 0;
  @Output() onPageChange = new EventEmitter<number>();

  option1: number = 0;

  option2: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.option1 = this.page ;
    this.option2 = this.page ;
    this.option1 ++;
    this.option2 =this.option1+ 1;
  }

  nextPage() {
    this.page++;
    this.option1 = this.page + 1;
    this.option2 = this.page + 2;
    this.onPageChange.emit(this.page);
  }
  previousPage() {
    this.page--;
    this.option1 = this.page + 1;
    this.option2 = this.page + 2;
    this.onPageChange.emit(this.page);
  }
  userSelectionPage(page: number) {
    this.option1 = this.page + 1;
    this.option2 = this.page + 2;
    this.onPageChange.emit(page);
  }
}
