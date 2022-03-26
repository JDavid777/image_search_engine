import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() idModal: string = 'idModal';
  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}
}
