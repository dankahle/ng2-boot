import {Component, Input, OnInit} from '@angular/core';
import {ProgressbarSettings} from "../../demo/demo-progressbar/demo-progressbar.component";

@Component({
  selector: 'ng2-progressbar',
  templateUrl: './ng2-progressbar.component.html',
  styleUrls: ['./ng2-progressbar.component.scss']
})
export class Ng2ProgressbarComponent {
  @Input() settings: ProgressbarSettings;

}
