import {Component, OnInit, ViewChild, SimpleChanges, Input} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {NgModalCompComponent} from "../../ng-bootstrap/ng-modal-comp/ng-modal-comp.component";
import {ModalDirective} from "ng2-bootstrap";
import {Ng2ModalTempComp2Component} from "../../ng2-bootstrap/ng2-modal-temp-comp2/ng2-modal-temp-comp2.component";
import * as _ from "lodash";

class ModalOptions {
  backdrop: any = true;
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
  options: ModalOptions;
  modalRef: NgbModalRef;
  @ViewChild('ng2Modal') ng2Modal: Ng2ModalTempComp2Component;
  ng2ModalDirective: ModalDirective;
  _backdrop:boolean|string;
  _keyboard:boolean;

  constructor(private ngbModal: NgbModal) {
    this.init();
  }

  onDemoButtonChange() {
    this.init();
  }

  // total hack: we pass these options onto ng2 modal, but its input hook only watches the object
  // and not its properties, i.e. no more $watchCollection to use (grrr). We could wrap all properties in
  // accessors, or do this hack that changes the object on each docheck event (wasteful), just doing it here to
  // make a point, albeit the wrapping of each property in accessor is way annoying as well. They need an @Input option
  // that watches deep.
  ngDoCheck(val) {
    // this.options = _.cloneDeep(this.options);
  }

  get backdrop() {
    return this._backdrop;
  }
  set backdrop(val) {
    this._backdrop = val;
    this.options.backdrop = val;
    this.options = _.cloneDeep(this.options);
  }

  get keyboard() {
    return this._keyboard;
  }
  set keyboard(val) {
    this._keyboard = val;
    this.options.keyboard = val;
    this.options = _.cloneDeep(this.options);
  }

  ngAfterViewInit() {
    this.demo.buttonChange.subscribe(this.onDemoButtonChange.bind(this));
    // you have access to the ng2 ModalDirective after view init
    this.ng2ModalDirective = this.ng2Modal.modal;
  }

  init() {
    this.options = new ModalOptions();
    this.backdrop = this.options.backdrop;
    this.keyboard = this.options.keyboard;
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
    this.ng2Modal.show()
      .then(
        val => {
          console.log('success', val)
        },
        err => console.log('reject', err)
      );

    if (this.options.closeIn2) {
      setTimeout(() => {
        this.ng2Modal.hide();
      }, 2000);
    }
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

