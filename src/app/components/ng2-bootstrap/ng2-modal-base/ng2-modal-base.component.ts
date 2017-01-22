import {ModalDirective} from "ng2-bootstrap";
import {ViewChild, Component} from "@angular/core";

@Component({
  selector: 'ng2-modal-temp-comp-base',
  templateUrl: './ng2-modal-base.component.html',
  styleUrls: ['./ng2-modal-base.component.scss']
})
export class Ng2ModalBaseComponent {
  modal: ModalDirective;
  promiseResRej = false;
  private resResult: Function;
  private rejResult: Function;
  result: Promise<any>;
  private resViewInit: Function;
  private promiseViewInit:Promise<any>;

  constructor() {
    this.init();
    this.promiseViewInit = new Promise((res) => {
      this.resViewInit = res;
    })
  }

  ngAfterViewInit() {
    // if in child will override (won't call both), so have to do user.ngAfterViewInit() in child
    this.modal.onHidden.subscribe(x => {
      if (!this.promiseResRej) {
        this.rejResult();// don't leave the promise hanging if they hit esc or click on background, reject it
      }
    });
    this.resViewInit();
  }

  init() {
    this.promiseResRej = false;
    this.result = new Promise((res, rej) => {
      this.resResult = res;
      this.rejResult = rej;
    })
  }

  show():Promise<any> {
    this.promiseViewInit
      .then(() => {
        this.modal.show();
      });

    this.init();
    return this.result;
  }

  submit(val): void {
    this.promiseResRej = true;
    this.resResult(val);// must be before hide, or onHidden will reject promise first
    this.hide();
  }

  cancel(val) {
    this.promiseResRej = true;
    this.rejResult(val);// must be before hide, or onHidden will reject promise first
    this.hide();
  }

  hide() {
    this.modal.hide();
  }

}
