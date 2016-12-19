import {Component, OnInit, ViewChild, ApplicationRef, Input, EventEmitter, Output} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
import {INg2ModalShow, INg2ModalInstance} from '../ng2-modal.service';

export class User {
  name:string;
  age:number
}

@Component({
  selector: 'ng2-modal-temp-comp',
  templateUrl: './ng2-modal-temp-comp.component.html',
  styleUrls: ['./ng2-modal-temp-comp.component.css']
})
export class Ng2ModalTempCompComponent implements INg2ModalShow {
  @ViewChild('modal') public modal: ModalDirective;
  user = new User();
  private resResult:Function;
  private rejResult:Function;
  result:Promise<any> = new Promise((res, rej) => {
      this.resResult = res;
      this.rejResult = rej;
  });

  show():INg2ModalInstance {
    return {
      modal: this.modal,
      result: this.result
    }
  }

  hide() {
    // I assume this.modal doesn't exist until after view init so protect the call
    if (this.modal) {
      this.modal.hide();
    }
  }

  ngAfterViewInit() {
    // have to wait till after view init to show, else it crashes on no config object
    this.modal.show();
  }

  public ok(): void {
    this.modal.hide();
    this.resResult(this.user);
  }

  public dismiss() {
    this.modal.hide();
    this.rejResult();
  }

}
