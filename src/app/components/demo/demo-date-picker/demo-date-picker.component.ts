import {Component, OnInit, ViewChild, EventEmitter} from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {NgDatePickerComponent} from "../../ng-bootstrap/ng-date-picker/ng-date-picker.component";
import {Ng2DatePickerComponent} from "../../ng2-bootstrap/ng2-date-picker/ng2-date-picker.component";
import {DemoComponent} from "../demo/demo.component";

@Component({
  selector: 'demo-date-picker',
  templateUrl: './demo-date-picker.component.html',
  styleUrls: ['./demo-date-picker.component.scss']
})
export class DemoDatePickerComponent {
  @ViewChild('demo') demo: DemoComponent;
  @ViewChild('ng') ng: NgDatePickerComponent;
  @ViewChild('ng2') ng2: Ng2DatePickerComponent;
  setToday = new EventEmitter();
  thisMonth = new EventEmitter();
  minDate:Date;
  showStartDate:boolean;
  disabled:boolean;

  set todayOrLater(val) {
    console.log('todayorlater set', val);
    if (val) {
      this.minDate = new Date();
    }
    else {
      this.minDate = undefined;
    }
  }

  ngAfterViewInit() {
    this.demo.buttonChange.subscribe(this.onButtonChange.bind(this));
  }

  init() {
    this.minDate = this.showStartDate = this.disabled = undefined;
  }

  onButtonChange() {
    this.init();

    // this is so hacky, but just proving a point: so can't viewchild() the child at the same tile the child injects the parent in its constructor, I get that, so why not have the parent just set a parent property on the child? Easy enough to do in ngAfterViewInit I suppose, but you have *ngIf on the children so have to wait till they're around to set the property, but they aren't around right when you get the buttonChange event, so you spin a cycle, then grab them. Works, but it's hacky.
    if (this.demo.ngShow) {
      setTimeout(() => this.ng.parent = this);
    }
  }

  fireSetToday() {
    this.setToday.emit();
  }

  fireThisMonth() {
    this.thisMonth.emit();
  }

}
