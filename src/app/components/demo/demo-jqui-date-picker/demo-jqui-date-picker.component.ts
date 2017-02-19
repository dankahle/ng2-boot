import { Component, OnInit } from '@angular/core';
import {JquiDatepickerConfigService} from "../../mine/jquiDatePicker/jqui-datepicker-config.service";
import * as moment from 'moment';

@Component({
  selector: 'demo-jqui-date-picker',
  templateUrl: './demo-jqui-date-picker.component.html',
  styleUrls: ['./demo-jqui-date-picker.component.scss']
})
export class DemoJquiDatePickerComponent {
  date:string;
  config = {
    minDate: new Date(),
    maxDate: moment().add(7, 'days').toDate()
  }

  updateDate(date) {
    this.date = date;
  }
}
