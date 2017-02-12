import {Component, OnInit, Input, ViewChild, Optional} from '@angular/core';
import {NgbDateStruct, NgbDatepicker} from "@ng-bootstrap/ng-bootstrap";
import {DemoDatePickerComponent} from "../../demo/demo-date-picker/demo-date-picker.component";


@Component({
  selector: 'ng-date-picker',
  exportAs: 'ngDatePickerComponent',
  templateUrl: './ng-date-picker.component.html',
  styleUrls: ['./ng-date-picker.component.css']
})
export class NgDatePickerComponent {
  @ViewChild('ngDatePicker') datePicker: NgbDatepicker;
  model: NgbDateStruct;
  _minDate: NgbDateStruct;
  startDate: NgbDateStruct;
  _parent: DemoDatePickerComponent;
  // model: NgbDateStruct;
  @Input() set minDate(val:Date) {
    this._minDate = this.ngbDateStructFromDate(val);
  };
  @Input() set showStartDate(val:boolean) {
    if (val) {
      this.startDate = this.ngbDateStructFromDate(new Date(1957, 5, 29));
    }
    else {
      this.startDate = null;
    }
  };
  @Input() disabled:boolean;

  setToday() {
    this.model = this.ngbDateStructFromDate(new Date())
  }

  thisMonth() {
    this.datePicker.navigateTo();
  }

  set parent(val) {
    this._parent = val;
    this._parent.setToday.subscribe(this.setToday.bind(this));
    this._parent.thisMonth.subscribe(this.thisMonth.bind(this));
  }

/*
  // this won't work cause parent is already using @ViewChild to see this guy. Can't have both evidently
  constructor(private demoDatePicker:DemoDatePickerComponent) {

  }
*/

  ngbDateStructFromDate(date) {
    if (date) {
      return {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()}
    }
  }
}

