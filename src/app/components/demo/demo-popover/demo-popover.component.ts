import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'demo-popover',
  templateUrl: './demo-popover.component.html',
  styleUrls: ['../../demo-content.scss', './demo-popover.component.scss']
})
export class DemoPopoverComponent {
  @ViewChild('demo') demo;
  position:string;

  constructor() {
    this.init();
  }

  init() {
    this.position = 'top';
  }

  ngAfterViewInit() {
    this.demo.buttonChange.subscribe(this.onDemoButtonChange.bind(this));
  }

  onDemoButtonChange() {
    this.init();
  }


}
