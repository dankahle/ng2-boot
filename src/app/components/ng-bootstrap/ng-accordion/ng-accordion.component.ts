import {Component, OnInit, Input, ViewChild, ViewChildren} from '@angular/core';
import {DemoAccordionComponent, Panel} from "../../demo/demo-accordion/demo-accordion.component";
import * as _ from 'lodash';
import {NgbPanel, NgbAccordion} from "@ng-bootstrap/ng-bootstrap/accordion/accordion";

@Component({
  selector: 'ng-accordion',
  templateUrl: './ng-accordion.component.html',
  styleUrls: ['./ng-accordion.component.css']
})
export class NgAccordionComponent {
  @Input() panels:Panel[];
  @Input() onePanel:boolean;
  @ViewChild('acc') accord:NgbAccordion;

/*
  // this works fine, but parent using viewChild and calling child.toggle() is cleaner
  constructor(private demoAccord:DemoAccordionComponent) {
    demoAccord.evtToggle.subscribe(this.toggle.bind(this));
  }
*/

  toggle(id) {
      this.accord.toggle(id);
  }

}
