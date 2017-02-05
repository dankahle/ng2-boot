import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ng-buttons',
  templateUrl: './ng-buttons.component.html',
  styleUrls: ['./ng-buttons.component.scss']
})
export class NgButtonsComponent {

  booleanToggle = true;
  stringToggleVal = 'trueVal';

  radioVal = 'middle';

  checkVals = {
    left: false,
    middle: true,
    right: false
  }

  stringToggle() {
    if (this.stringToggleVal === "trueVal") {
      this.stringToggleVal = "falseVal";
    }
    else {
      this.stringToggleVal = "trueVal";
    }
  }

}
