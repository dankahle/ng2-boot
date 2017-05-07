import {Component, Input, OnInit} from '@angular/core';
import {ProgressbarSettings} from "../../demo/demo-progressbar/demo-progressbar.component";

@Component({
  selector: 'ng-progressbar',
  templateUrl: './ng-progressbar.component.html',
  styleUrls: ['./ng-progressbar.component.scss']
})
export class NgProgressbarComponent {
@Input() settings: ProgressbarSettings;


}
