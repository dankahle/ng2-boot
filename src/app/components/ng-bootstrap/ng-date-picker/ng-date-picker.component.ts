import {Component, OnInit, Input} from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'ng-date-picker',
  templateUrl: './ng-date-picker.component.html',
  styleUrls: ['./ng-date-picker.component.css']
})
export class NgDatePickerComponent {
  model: NgbDateStruct;
  _minDate: NgbDateStruct;
  // model: NgbDateStruct;
  @Input() set minDate(val:Date) {
    this._minDate = this.ngbDateStructFromDate(val);
  };

  constructor() {
/*
    // to set the current date to today, then it's in primary color, but why the heck isn't is highlighted
    // at all? I.e. no value to say "show today somehow"
    const now = new Date();
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()}
*/
  }

  ngbDateStructFromDate(date) {
    if (date) {
      return {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()}
    }
  }
}
