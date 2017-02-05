import {Component, OnInit, ViewChild} from '@angular/core';
import {DemoComponent} from "../demo/demo.component";
import {NgCarouselComponent} from "../../ng-bootstrap/ng-carousel/ng-carousel.component";
import {Ng2CarouselComponent} from "../../ng2-bootstrap/ng2-carousel/ng2-carousel.component";

@Component({
  selector: 'demo-carousel',
  templateUrl: './demo-carousel.component.html',
  styleUrls: ['../../demo-content.scss', './demo-carousel.component.css']
})
export class DemoCarouselComponent {
  @ViewChild('demo') demo:DemoComponent;
  @ViewChild('ngCarousel') ngCarousel:NgCarouselComponent;
  @ViewChild('ng2Carousel') ng2Carousel:Ng2CarouselComponent;
  wrap = false;
  noPause = false;

  init() {
    this.wrap = false;
    this.noPause = false;
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

  select2nd() {
    if (this.ngCarousel) {
      this.ngCarousel.select('2');
    }
    else if (this.ng2Carousel) {
      this.ng2Carousel.activeSlide = 1;
    }
  }

}
