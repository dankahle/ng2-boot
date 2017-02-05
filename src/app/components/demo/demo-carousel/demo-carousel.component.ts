import {Component, OnInit, ViewChild} from '@angular/core';
import {DemoComponent} from "../demo/demo.component";
import {NgCarouselComponent} from "../../ng-bootstrap/ng-carousel/ng-carousel.component";

@Component({
  selector: 'demo-carousel',
  templateUrl: './demo-carousel.component.html',
  styleUrls: ['../../demo-content.scss', './demo-carousel.component.css']
})
export class DemoCarouselComponent {
  @ViewChild('demo') demo:DemoComponent;
  @ViewChild('ngCarousel') ngCarousel:NgCarouselComponent;

  repeat = false;

  init() {
    this.repeat = false;
  }

  ngAfterViewInit() {
    this.demo.buttonChange.subscribe(this.onButtonChange.bind(this));
  }

  onButtonChange() {
    this.init();
  }

  pause() {
    if (this.ngCarousel) {
      this.ngCarousel.pause();
    }
  }

  restart() {
    if (this.ngCarousel) {
      this.ngCarousel.restart();
    }
  }

  select(val) {
    if (this.ngCarousel) {
      this.ngCarousel.select(val);
    }
  }

}
