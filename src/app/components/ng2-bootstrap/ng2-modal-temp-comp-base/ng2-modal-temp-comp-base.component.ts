
import {ModalDirective} from "ng2-bootstrap";
import {ViewChild} from "@angular/core";
export class Ng2ModalTempCompBaseComponent  {

  @ViewChild('modal') modal: ModalDirective;
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
