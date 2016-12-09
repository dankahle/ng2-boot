import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {DemoDynamicComponent} from "../demo-dynamic/demo-dynamic.component";
import {DkModalComponent} from "../../mine/dk-modal/dk-modal.component";

@Component({
  selector: 'demo-modal-using-comp',
  templateUrl: './demo-modal-using-comp.component.html',
  styleUrls: ['./demo-modal-using-comp.component.scss']
})
export class DemoModalUsingCompComponent {

  constructor(private ngbModal: NgbModal, ddc:DemoDynamicComponent) {
  }

  openModal() {
    let modalRef = this.ngbModal.open(DkModalComponent);
    let dkModalComponent:DkModalComponent = modalRef.componentInstance as DkModalComponent;
    modalRef.result.then(
      val => {
        console.log('stuff from modal comp:', dkModalComponent.stuff);
        console.log('success', val)
      },
      val => console.log('dismiss', val)
    );
  }

}
