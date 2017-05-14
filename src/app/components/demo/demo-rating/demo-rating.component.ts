import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";

export class RatingSettings {
  rate:number;
  readonly:boolean
}

@Component({
  selector: 'demo-rating',
  templateUrl: './demo-rating.component.html',
  styleUrls: ['../../demo-content.scss', './demo-rating.component.scss']
})
export class DemoRatingComponent {

  settings:RatingSettings = <RatingSettings>{rate: 3, readonly: false};

  constructor(ngRatingConfig: NgbRatingConfig) {
    ngRatingConfig.max = 5;
  }
}
