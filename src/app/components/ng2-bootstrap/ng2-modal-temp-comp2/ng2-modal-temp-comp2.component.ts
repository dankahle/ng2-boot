import {Component, OnInit, ViewChild, ApplicationRef, Input, EventEmitter, Output} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
import {INg2ModalShow, INg2ModalInstance} from '../ng2-modal.service';
import {Ng2ModalTempCompBaseComponent} from "../ng2-modal-temp-comp-base/ng2-modal-temp-comp-base.component";

export class User {
  name:string;
  age:number
}

@Component({
  selector: 'ng2-modal-temp-comp2',
  templateUrl: './ng2-modal-temp-comp2.component.html',
  styleUrls: ['./ng2-modal-temp-comp2.component.scss']
})
export class Ng2ModalTempComp2Component extends Ng2ModalTempCompBaseComponent {
  user:User;

  init() {
    this.user = new User();
    super.init();
  }


}
