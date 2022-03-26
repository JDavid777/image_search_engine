import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() onSearchValue = new EventEmitter<string>();
  @Output() onSearchCategory = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  //Emite el patrón de busqueda especificado en el input
  search(value: string) {
    this.onSearchValue.emit(value);
  }

  //Emite el valor correspondiente a la categoría seleccionada en el dropdown
  searchCategory(category:string){
    this.onSearchCategory.emit(category)
  }
}
