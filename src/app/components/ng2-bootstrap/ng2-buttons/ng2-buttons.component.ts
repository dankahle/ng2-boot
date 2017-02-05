import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng2-buttons',
  templateUrl: './ng2-buttons.component.html',
  styleUrls: ['./ng2-buttons.component.scss']
})
export class Ng2ButtonsComponent {

  booleanToggle = true;
  stringToggle = 'trueVal';

  radioVal = 'middle';

  checkVals = {
    left: false,
    middle: true,
    right: false
  }

}
