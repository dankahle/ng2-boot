import {Component, ViewChild, Input} from '@angular/core';
import {Ng2ModalTempCompBaseComponent} from "../ng2-modal-temp-comp-base/ng2-modal-temp-comp-base.component";
import {ModalDirective, ModalOptions} from "ng2-bootstrap";

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
  _options:ModalOptions;

  get options() {
    return this._options;
  }

  @Input() set options(options) {
    this._options = {
      backdrop: options.backdrop,
      ignoreBackdropClick: options.backdrop === 'static',
      keyboard: options.keyboard
    }
  }

  @ViewChild('modal') modal: ModalDirective;// won't work in parent comp, has to be in comp with template, otherwise we'd want this in parent

  init() {
    this.user = new User();
    super.init();
  }

}
