import {Component, OnInit, ViewChild} from '@angular/core';
import {INg2ModalInstance} from "../../ng2-bootstrap/ng2-modal.service";
import {ModalDirective} from "ng2-bootstrap";
import {Ng2ModalTempComp2Component} from "../../ng2-bootstrap/ng2-modal-temp-comp2/ng2-modal-temp-comp2.component";

@Component({
  selector: 'demo-modal-temp-comp2',
  templateUrl: './demo-modal-temp-comp2.component.html',
  styleUrls: ['./demo-modal-temp-comp2.component.css']
})
export class DemoModalTempComp2Component {
  inst:INg2ModalInstance;
  @ViewChild('modal') modal:Ng2ModalTempComp2Component;
  modalDirective:ModalDirective;
  hideIn2:boolean;
  testval = '';

  ngAfterViewInit() {
    // you have access to ng2 ModalDirective after view init, but I'm thinking shoujld just interface with the modal,
    // or maybe jsut the base class? Base would make it consistent, but child modal class would allow for unique capabilities.
    // I guess the deal is: dealing with the child "is" dealing with the base, just that the child can override when it has
    // a special need.
    this.modalDirective = this.modal.modal;
  }

  showNg2() {
    this.modal.show()
      .then(
        val => {
          this.testval += 'promise';
          console.log('success', val)
        },
        err => console.log('reject', err)
      );

    if (this.hideIn2) {
      setTimeout(() => this.modal.hide(), 2000);
    }


  }

}
