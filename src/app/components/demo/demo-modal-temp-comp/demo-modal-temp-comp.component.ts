import {Component, OnInit, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {Ng2ModalService, INg2ModalInstance} from "../../ng2-bootstrap/ng2-modal.service";
import {Ng2ModalTempComp2Component} from "../../ng2-bootstrap/ng2-modal-temp-comp2/ng2-modal-temp-comp2.component";

@Component({
  selector: 'demo-modal-temp-comp',
  templateUrl: './demo-modal-temp-comp.component.html',
  styleUrls: ['./demo-modal-temp-comp.component.css']
})
export class DemoModalTempCompComponent {
  inst:INg2ModalInstance;

  constructor(private viewContainer: ViewContainerRef,
              private compResolver: ComponentFactoryResolver,
              private ng2ModalService: Ng2ModalService) {
  }

  showNg2() {
    this.inst = this.ng2ModalService.open(Ng2ModalTempComp2Component, this.viewContainer, this.compResolver);
    this.inst.result.then(
      resp => console.log('success', resp),
      err => console.log('reject', err)
    );

    // setTimeout(() => this.inst.modal.hide(), 3000);
  }

}
