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

  constructor(private demoDatePicker:DemoDatePickerComponent) {

  }

  ngAfterViewInit() {
    // this.demoDatePicker.setToday.subscribe(this.setToday);
  }

  setToday() {
    this.datePicker.navigateTo(this.ngbDateStructFromDate(new Date()));
  }

  ngbDateStructFromDate(date) {
    if (date) {
      return {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()}
    }
  }
}

