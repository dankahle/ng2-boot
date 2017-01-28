import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {DemoAccordionComponent, Panel} from "../../demo/demo-accordion/demo-accordion.component";

@Component({
  selector: 'ng2-accordion',
  templateUrl: './ng2-accordion.component.html',
  styleUrls: ['./ng2-accordion.component.css']
})
export class Ng2AccordionComponent {
  @Input() panels:Panel[];
  @Input() onePanel:boolean;
  @ViewChild('acc') accord;

  toggle(id) {
    this.accord.toggle(id);
  }

}
