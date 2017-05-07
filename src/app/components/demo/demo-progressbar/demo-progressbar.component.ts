import { Component, OnInit } from '@angular/core';

export class ProgressbarSettings {
  type:string;
  striped: boolean;
  animated: boolean
  showValue: boolean;
  value: number;
  customText: string;
}

@Component({
  selector: 'demo-progressbar',
  templateUrl: './demo-progressbar.component.html',
  styleUrls: ['../../demo-content.scss', './demo-progressbar.component.scss']
})
export class DemoProgressbarComponent {

  settings:ProgressbarSettings = <ProgressbarSettings>{value: 50};

}
