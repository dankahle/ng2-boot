import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {NgModalCompComponent} from "../../ng-bootstrap/ng-modal-comp/ng-modal-comp.component";

export class ModalOptions {
   backdrop:any = true;
   keyboard = true;
   windowClass = '';
   closeIn2 = false;
}

@Component({
   selector: 'demo-modal-using-comp',
   templateUrl: './demo-modal-using-comp.component.html',
   styleUrls: ['./demo-modal-using-comp.component.scss']
})
export class DemoModalUsingCompComponent {
  @ViewChild('demo') demo;
   options:ModalOptions;
   modalRef:NgbModalRef;

   constructor(private ngbModal: NgbModal) {
     this.init();
   }

   ngAfterViewInit() {
     this.demo.buttonChange.subscribe(this.onDemoButtonChange);
   }

   init() {
     this.options = new ModalOptions();
   }

   onDemoButtonChange() {
     this.init();
   }

   openModal() {
     if (this.demo.ngShow) {
       this.openNgModal();
     }
     else if (this.demo.ng2Show) {
       this.openNg2Modal();
     }
   }

   openNg2Modal() {

   }

   openNgModal() {
      this.modalRef = this.ngbModal.open(NgModalCompComponent, this.options);
      let modal: NgModalCompComponent = this.modalRef.componentInstance as NgModalCompComponent;
      this.modalRef.result.then(
        resp => console.log('success', resp),
        err => console.log('reject', err)
      );

     if (this.options.closeIn2) {
       setTimeout(() => {
           this.modalRef.close({action: 'close'});
       }, 2000);
     }

   }

}

