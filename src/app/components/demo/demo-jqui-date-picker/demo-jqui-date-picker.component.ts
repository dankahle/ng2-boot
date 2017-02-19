import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-jqui-date-picker',
  templateUrl: './demo-jqui-date-picker.component.html',
  styleUrls: ['./demo-jqui-date-picker.component.scss']
})
export class DemoJquiDatePickerComponent {
  date:string;

  updateDate(date) {
    this.date = date;
  }
}
