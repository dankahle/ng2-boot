import {Component, OnInit, ViewChild, ApplicationRef} from '@angular/core';
import {ModalDirective, ModalOptions} from "ng2-bootstrap";

export class User {
  name:string;
  age:number
}

@Component({
  selector: 'ng2-modal-temp',
  templateUrl: './ng2-modal-temp.component.html',
  styleUrls: ['./ng2-modal-temp.component.scss']
})
export class Ng2ModalTempComponent {
  closeResult: string;
  @ViewChild('modal') public modal: ModalDirective;
  user = new User();

  public showModal(): void {
    //nothing returned here, but have modal = BsModal with show/hide so what more is needed?
    let obj = this.modal.show();
  }

  public ok(val): void {
    console.log('success', this.user);
    this.modal.hide();
  }

  public cancel(val): void {
    console.log('cancelled');
    this.modal.hide();
  }

}
