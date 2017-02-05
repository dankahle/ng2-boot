import {Component, OnInit, ViewChild, Input} from '@angular/core';

@Component({
  selector: 'ng2-carousel',
  templateUrl: './ng2-carousel.component.html',
  styleUrls: ['./ng2-carousel.component.css'],
  exportAs: 'ng2Carousel'
})
export class Ng2CarouselComponent {

  @ViewChild('carousel') carousel; // no exportAs on CarouselComponent (grrrr)

  @Input() wrap:boolean
  @Input() noPause:boolean;
  @Input() activeSlide:number;

}
