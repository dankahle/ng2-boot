import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'modal-temp',
  templateUrl: './modal-temp.component.html',
  styleUrls: ['./modal-temp.component.scss']
})
export class ModalTempComponent  {

   constructor(private modalService: NgbModal) {}
   closeResult: string;

   open(content) {
      this.modalService.open(content).result.then((result) => {
         this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
   }

   private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
         return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
         return 'by clicking on a backdrop';
      } else {
         return  `with: ${reason}`;
      }
   }
}
