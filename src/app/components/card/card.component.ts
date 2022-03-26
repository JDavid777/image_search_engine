import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/interfaces/image.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  
  @Input()
  image!: Image;

  constructor() {

  }

  ngOnInit(): void {}
}
