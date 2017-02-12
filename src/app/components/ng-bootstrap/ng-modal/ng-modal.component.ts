import { Component, OnInit } from '@angular/core';
import {NgModalBaseComponent} from "../ng-modal-base/ng-modal-base.component";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

export class User {
  name:string;
  age:number
}

@Component({
  templateUrl: './ng-modal.component.html',
  styleUrls: ['./ng-modal.component.css']
})
export class NgModalComponent extends NgModalBaseComponent {
  user:User;

  constructor(protected modal:NgbActiveModal) {
    super(modal);
  }

  init() {
    this.user = new User();
    super.init();
  }


}
