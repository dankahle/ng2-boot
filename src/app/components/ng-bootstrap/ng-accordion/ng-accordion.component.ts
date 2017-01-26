import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {DemoAccordionComponent} from "../../demo/demo-accordion/demo-accordion.component";

@Component({
  selector: 'ng-accordion',
  templateUrl: './ng-accordion.component.html',
  styleUrls: ['./ng-accordion.component.css']
})
export class NgAccordionComponent {
  @Input() panels;
  @Input() onePanel;
  @ViewChild('acc') accord;

/*
  // this works fine, but parent using viewChild and calling child.toggle() is cleaner
  constructor(private demoAccord:DemoAccordionComponent) {
    demoAccord.evtToggle.subscribe(this.toggle.bind(this));
  }
*/

  toggle(id) {
      this.accord.toggle(id);
  }

  onDemoButtonChange() {
    this.onePanel = false;
  }

}
