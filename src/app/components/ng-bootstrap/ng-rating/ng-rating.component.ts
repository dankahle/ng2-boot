import {Component, Input, OnInit} from '@angular/core';
import {RatingSettings} from "../../demo/demo-rating/demo-rating.component";

@Component({
  selector: 'ng-rating',
  templateUrl: './ng-rating.component.html',
  styleUrls: ['./ng-rating.component.scss']
})
export class NgRatingComponent {

@Input() settings:RatingSettings;

}
