import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {NgModalCompComponent} from "../../ng-bootstrap/ng-modal-comp/ng-modal-comp.component";

export class ModalOptions {
   backdrop:any = true;
   keyboard = true;
   windowClass = '';
}

@Component({
   selector: 'demo-modal-using-comp',
   templateUrl: './demo-modal-using-comp.component.html',
   styleUrls: ['./demo-modal-using-comp.component.scss']
})
export class DemoModalUsingCompComponent {
   options = new ModalOptions();
   modalRef:NgbModalRef;
   _closeIn3:boolean;
   _dismissIn3:boolean;

   get closeIn3() {return this._closeIn3;}
   set closeIn3(val) {
      this._closeIn3 = true;
      this._dismissIn3 = false;
   }
   get dismissIn3() {return this._dismissIn3;}
   set dismissIn3(val) {
      this._dismissIn3 = true;
      this._closeIn3 = false;
   }

   constructor(private ngbModal: NgbModal) {
   }

   openModal() {
      this.modalRef = this.ngbModal.open(NgModalCompComponent, this.options);
      let dkModalComponent: NgModalCompComponent = this.modalRef.componentInstance as NgModalCompComponent;
      this.modalRef.result.then(
         val => {
            console.log('stuff from modal comp:', dkModalComponent.stuff);
            console.log('success:', val.action ? 'action: ' + val.action : val);
         },
         val => console.log('dismiss:', val.action ? 'action: ' + val.action : val)
      );
      setTimeout(() => {
         if (this.closeIn3) {
            this.modalRef.close({action: 'close'});
         }
         else if (this.dismissIn3) {
            this.modalRef.dismiss({action: 'dismiss'});
         }
      }, 2000);
   }

}

