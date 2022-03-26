import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/interfaces/image.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  images: Image[] = [];
  page: number = 1;
  count: number = 0;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.page = params['page'];
      if (!this.page || this.page == 0) {
        this.page = 1;
      }
      this.getImages();
    });
  }

  getImages() {
    this.api.getImages(this.page).subscribe((response) => {
      this.images = response.hits;
      this.count = response.total;
    });
  }

  search(value: string) {
    this.api.getImagesByPattern(1, value).subscribe((response) => {
      this.images = response.hits;
    });
  }

  searchCategory(category: string) {
    this.api.getImagesByaCategory(1, category).subscribe((response) => {
      this.images = response.hits;
    });
  }
  nextPag() {
    this.page = this.page + 1;
    this.getImages();
  }
}
