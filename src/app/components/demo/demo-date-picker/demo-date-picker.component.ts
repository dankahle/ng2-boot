import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-date-picker',
  templateUrl: './demo-date-picker.component.html',
  styleUrls: ['./demo-date-picker.component.scss']
})
export class DemoDatePickerComponent {
  minDate:Date;
  set todayOrLater(val) {
    console.log('todayorlater set', val);
    if (val) {
      this.minDate = new Date();
    }
    else {
      this.minDate = undefined;
    }
  }

}
