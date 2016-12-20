import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
import {Ng2ModalTempCompBaseComponent} from "../ng2-modal-temp-comp-base/ng2-modal-temp-comp-base.component";

@Component({
  selector: 'ng2-modal-temp-comp2',
  templateUrl: './ng2-modal-temp-comp2.component.html',
  styleUrls: ['./ng2-modal-temp-comp2.component.css']
})
export class Ng2ModalTempComp2Component extends Ng2ModalTempCompBaseComponent {
  @ViewChild('modal') public modal: ModalDirective;


}
