import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  templateUrl: './ng-modal-comp.component.html',
  styleUrls: ['./ng-modal-comp.component.css']
})
export class NgModalCompComponent {
  stuff = 'lala';

  constructor(private modal:NgbActiveModal) { }

  close(val) {
    this.modal.close(val);
  }

  dismiss(val) {
    this.modal.dismiss(val);
  }

}
