/*
import {Component, OnInit, Input, ViewChild, Optional} from '@angular/core';
import {NgbDateStruct, NgbDatepicker, NgbDateParserFormatter} from "@ng-bootstrap/ng-bootstrap";
import {DemoDatePickerComponent} from "../../demo/demo-date-picker/demo-date-picker.component";
import {DkParserFormatter} from "./parserFormatter";
import * as moment from 'moment';

@Component({
  selector: 'ng-date-picker',
  exportAs: 'ngDatePickerComponent',
  templateUrl: './ng-date-picker.component.html',
  styleUrls: ['./ng-date-picker.component.css'],
  providers: [{provide: NgbDateParserFormatter, useClass: DkParserFormatter}]
})
export class NgDatePickerComponent {
  @ViewChild('ngDatePicker') datePicker: NgbDatepicker;
  date: string;
  formatMoment = 'MM/DD/YYYY';
  formatPipe = 'MM/dd/yyyy';
  _ngbDate: NgbDateStruct;
  get ngbDate() {return this._ngbDate;}
  set ngbDate (val:NgbDateStruct) {
    this._ngbDate = val;
    this.date = moment(new Date(val.year, val.month-1, val.day)).format(this.formatMoment);
  }
  _minDate: NgbDateStruct;
  startDate: NgbDateStruct;
  _parent: DemoDatePickerComponent;
  @Input() set minDate(val:Date) {
    this._minDate = this.ngbDateStructFromDate(val);
  };
  @Input() set showStartDate(val:boolean) {
    if (val) {
      this.startDate = this.ngbDateStructFromDate(new Date(1991, 11, 14));
    }
    else {
      this.startDate = null;
    }
  };
  @Input() disabled:boolean;

  setToday() {
    this.ngbDate = this.ngbDateStructFromDate(new Date())
  }

  thisMonth() {
    this.datePicker.navigateTo();
  }

  set parent(val) {
    this._parent = val;
    this._parent.setToday.subscribe(this.setToday.bind(this));
    this._parent.thisMonth.subscribe(this.thisMonth.bind(this));
  }

/!*
  // this won't work cause parent is already using @ViewChild to see this guy. Can't have both evidently
  constructor(private demoDatePicker:DemoDatePickerComponent) {

  }
*!/

  ngbDateStructFromDate(date) {
    if (date) {
      return {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()}
    }
  }

}

*/
