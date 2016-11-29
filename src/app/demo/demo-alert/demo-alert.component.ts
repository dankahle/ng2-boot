import {Component, OnInit, ApplicationRef} from '@angular/core';

@Component({
  selector: 'demo-alert',
  templateUrl: './demo-alert.component.html',
  styleUrls: ['./demo-alert.component.scss']
})
export class DemoAlertComponent {
  visible = 'visible';


  constructor(appRef:ApplicationRef) { }

  close(val) {
    this.visible = 'hidden';
    console.log('closed alert with val: ', val);
  }
}
