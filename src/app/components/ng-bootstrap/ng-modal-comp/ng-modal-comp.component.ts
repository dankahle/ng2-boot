import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgModalBaseComponent} from "../ng-modal-base/ng-modal-base.component";

export class User {
  name:string;
  age:number
}

@Component({
  templateUrl: './ng-modal-comp.component.html',
  styleUrls: ['./ng-modal-comp.component.css']
})
export class NgModalCompComponent extends NgModalBaseComponent {
  user:User;

  init() {
    this.user = new User();
    super.init();
  }




}
