import {Component, ViewChild} from '@angular/core';
import {Ng2ModalTempCompBaseComponent} from "../ng2-modal-temp-comp-base/ng2-modal-temp-comp-base.component";
import {ModalDirective} from "ng2-bootstrap";

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
  @ViewChild('modal') modal: ModalDirective;// won't work in parent comp, has to be in comp with template, otherwise we'd want this in parent

  init() {
    this.user = new User();
    super.init();
  }

}
