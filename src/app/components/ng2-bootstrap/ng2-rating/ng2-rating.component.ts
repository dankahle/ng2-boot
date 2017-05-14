import {Component, Input, OnInit} from '@angular/core';
import {RatingSettings} from "../../demo/demo-rating/demo-rating.component";

@Component({
  selector: 'ng2-rating',
  templateUrl: './ng2-rating.component.html',
  styleUrls: ['./ng2-rating.component.scss']
})
export class Ng2RatingComponent {
  max = 5;
  rate = 3;
  @Input() settings:RatingSettings;

}
