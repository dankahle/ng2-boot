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
  minDate:Date;
  showStartDate:boolean;

  set todayOrLater(val) {
    console.log('todayorlater set', val);
    if (val) {
      this.minDate = new Date();
    }
    else {
      this.minDate = undefined;
    }
  }

  fireSetToday() {
    this.setToday.emit();
  }

}
