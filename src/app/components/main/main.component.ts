import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('viewDetail') modal!: ElementRef<HTMLInputElement>;
  selected!: Image;
  page: number = 1;
  count: number = 0;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.page = params['page'];
      let category = params['category'];
      let pattern = params['query'];
      if (!this.page || this.page == 0) {
        this.page = 1;
      }
      if (category) {
        this.searchCategory(category);
      } else if (pattern) {
        this.search(pattern);
      } else {
        this.getImages();
      }
    });
  }

  getImages() {
    this.api.getImages(this.page).subscribe((response) => {
      this.images = response.hits;
      this.count = response.total;
    });
  }

  search(value: string) {
    this.api.getImagesByPattern(this.page, value).subscribe((response) => {
      this.images = response.hits;
      this.count = response.total;
    });
  }

  searchCategory(category: string) {
    this.api.getImagesByCategory(this.page, category).subscribe((response) => {
      this.images = response.hits;
      this.count = response.total;
    });
  }
  nextPag() {
    this.page = this.page + 1;
    this.getImages();
  }
  imageSelected(image: Image) {
    this.selected = image;
    console.log(this.selected);
  }

  newPage(page: number) {
    let query: string =
      this.router.url.substring(0, this.router.url.length - 1) + page;
    this.router.navigate([query]);
  }
}
