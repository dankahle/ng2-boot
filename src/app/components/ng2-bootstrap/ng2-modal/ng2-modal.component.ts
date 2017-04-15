import {Component, ViewChild, Input} from '@angular/core';
import {ModalDirective, ModalOptions} from "ngx-bootstrap";
import {Ng2ModalBaseComponent} from "../ng2-modal-base/ng2-modal-base.component";

export class User {
  name:string;
  age:number
}

@Component({
  selector: 'ng2-modal',
  templateUrl: './ng2-modal.component.html',
  styleUrls: ['./ng2-modal.component.scss']
})
export class Ng2ModalComponent extends Ng2ModalBaseComponent {
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
