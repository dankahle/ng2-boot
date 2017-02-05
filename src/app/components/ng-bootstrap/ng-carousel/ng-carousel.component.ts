import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {NgbCarousel} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'ng-carousel',
  templateUrl: './ng-carousel.component.html',
  styleUrls: ['./ng-carousel.component.css'],
  exportAs: 'ngCarousel'
})
export class NgCarouselComponent {
  @ViewChild('carousel') carousel:NgbCarousel;

  @Input() wrap:boolean;

  pause() {
    this.carousel.pause();
  }

  restart() {
    this.carousel.cycle();
  }

  select(id:string) {
    this.carousel.select(id);
  }

}
