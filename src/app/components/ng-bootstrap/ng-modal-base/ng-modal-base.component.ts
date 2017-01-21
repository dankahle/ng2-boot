import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'ng-modal-base',
  templateUrl: './ng-modal-base.component.html',
  styleUrls: ['./ng-modal-base.component.css']
})
export class NgModalBaseComponent {

  constructor(protected modal:NgbActiveModal) {
    this.init();
  }

  init() {
  }

  submit(val) {
    this.modal.close(val);
  }

  cancel(val) {
    this.modal.dismiss(val);
  }

}
