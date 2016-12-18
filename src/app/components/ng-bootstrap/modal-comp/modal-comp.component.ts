import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  templateUrl: './modal-comp.component.html',
  styleUrls: ['./modal-comp.component.css']
})
export class ModalCompComponent {
  stuff = 'lala';

  constructor(private modal:NgbActiveModal) { }

  close(val) {
    this.modal.close(val);
  }

  dismiss(val) {
    this.modal.dismiss(val);
  }

}
