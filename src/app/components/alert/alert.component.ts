import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  visible = 'visible';

  constructor() { }

  close(val) {
    this.visible = 'hidden';
    console.log('closed alert with val: ', val);
  }

}
