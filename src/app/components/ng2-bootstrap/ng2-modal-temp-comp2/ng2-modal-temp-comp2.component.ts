import {Component, OnInit, ViewChild, ApplicationRef, Input, EventEmitter, Output} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
import {INg2ModalShow, INg2ModalInstance} from '../ng2-modal.service';

export class User {
  name:string;
  age:number
}

@Component({
  selector: 'ng2-modal-temp-comp2',
  templateUrl: './ng2-modal-temp-comp2.component.html',
  styleUrls: ['./ng2-modal-temp-comp2.component.scss']
})
export class Ng2ModalTempComp2Component {
  @ViewChild('modal') modal: ModalDirective;
  user:User;
  promiseResRej = false;
  private resResult:Function;
  private rejResult:Function;
  result:Promise<any>;

  constructor() {
    this.init();
  }

  ngAfterViewInit() {
    this.modal.onHidden.subscribe(x => {
      if (!this.promiseResRej) {
        this.reject();// don't leave the promise hanging if they hit esc or click on background, reject it
      }
    });
  }

  init() {
    this.user = new User();
    this.promiseResRej = false;
    this.result = new Promise((res, rej) => {
      this.resResult = res;
      this.rejResult = rej;
    })
  }

  show():Promise<any> {
    if (!this.modal) {
      return;// modal doesn't exist until view init, if they call it early, do nothing
    }
    this.init();// this modal could be reused multiple times, need to init on each show()
    this.modal.show();
    return this.result;
  }

  submit(val): void {
    this.resolve(val);// must be before hide, or onHidden will reject promise first
    this.hide();
  }

  cancel(val) {
    this.reject(val);// must be before hide, or onHidden will reject promise first
    this.hide();
  }

  hide() {
    this.modal.hide();
  }

  resolve(val:any) {
    this.promiseResRej = true;
    this.resResult(val);
  }

  reject(val?:any) {
    this.promiseResRej = true;
    this.rejResult(val);
  }

}
