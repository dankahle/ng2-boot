import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {DemoDatePickerComponent} from "../../demo/demo-date-picker/demo-date-picker.component";
import * as moment from 'moment';

@Component({
  selector: 'ng2-date-picker',
  exportAs: 'ng2DatePickerComponent',
  templateUrl: './ng2-date-picker.component.html',
  styleUrls: ['./ng2-date-picker.component.css']
})
export class Ng2DatePickerComponent {
  // ng2 not much for exportAs as they have no methods to call, all is done via inputs
  // @ViewChild('ng2DatePicker') datePicker: NgbDatepicker;
  show = false;
  _stringDate:string;
  get stringDate(): string {return this._stringDate;}
  set stringDate(val:string) {
    this._stringDate = val;
    let date = moment(val, 'MM/DD/YYYY');
    console.log(val, date.isValid());
    if(date.isValid()) {
      this._dateDate = date.toDate();
    }
  }
  _dateDate:Date;
  get dateDate() {return this._dateDate;}
  set dateDate(val) {
    this._dateDate = val;
    this._stringDate = moment(val).format('MM/DD/YYYY');
  }
  startDate: Date;
  _parent: DemoDatePickerComponent;
  @Input() minDate: Date;
  @Input() set showStartDate(val:boolean) {
    if (val) {
      this.startDate = new Date(1991, 11, 14);
    }
    else {
      this.startDate = null;
    }
  };
  @Input() disabled:boolean;

  setToday() {
    this.dateDate = new Date();
  }

  set parent(val) {
    this._parent = val;
    this._parent.setToday.subscribe(this.setToday.bind(this));
  }

  selectionDone(val) {

    this.show = false;
  }

}
