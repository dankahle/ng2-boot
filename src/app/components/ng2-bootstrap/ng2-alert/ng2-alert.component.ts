import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng2-alert',
  templateUrl: './ng2-alert.component.html',
  styleUrls: ['./ng2-alert.component.scss']
})
export class Ng2AlertComponent {

  visible = 'visible';
  show = true;

  close(val) {
    this.visible = 'hidden';
    console.log('closed alert with val: ', val);
  }

}
