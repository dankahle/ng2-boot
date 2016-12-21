import {Component, OnInit, ViewChild} from '@angular/core';
import {INg2ModalInstance} from "../../ng2-bootstrap/ng2-modal.service";
import {ModalDirective} from "ng2-bootstrap";

@Component({
  selector: 'demo-modal-temp-comp2',
  templateUrl: './demo-modal-temp-comp2.component.html',
  styleUrls: ['./demo-modal-temp-comp2.component.css']
})
export class DemoModalTempComp2Component {
  inst:INg2ModalInstance;
  @ViewChild('modal') modal;
  modalDirective:ModalDirective;
  hideIn2:boolean;
  testval = '';

  ngAfterViewInit() {
    this.modalDirective = this.modal.modal; // have access to ng2 ModalDirective, but only after view init
  }

  showNg2() {
    this.modal.show()
      .then(
        val => {
          this.testval += 'promise';
          this.modal.dkResult = val
          console.log('success', val)
        },
        err => console.log('reject', err)
      );

    if (this.hideIn2) {
      setTimeout(() => this.modal.hide(), 2000);
    }


  }

}
