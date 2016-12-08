import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-alert',
  templateUrl: './ng-alert.component.html',
  styleUrls: ['./ng-alert.component.scss']
})
export class NgAlertComponent {
  visible = 'visible';
  show = true;

  close(val) {
    this.visible = 'hidden';
    console.log('closed alert with val: ', val);
  }

}
