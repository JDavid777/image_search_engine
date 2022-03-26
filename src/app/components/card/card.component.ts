import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/interfaces/image.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  image!: Image;
  tags!: string[];
  @Input() viewDetail: Boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.tags = this.image.tags.split(',');
    console.log(this.tags);
  }
  search(value: string) {
    this.router.navigate([`images/${value}/page/1`]);
  }
}
