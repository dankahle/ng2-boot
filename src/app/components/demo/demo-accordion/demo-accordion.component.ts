import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {NgbAccordionConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'demo-accordion',
  templateUrl: './demo-accordion.component.html',
  styleUrls: ['./demo-accordion.component.css']
})
export class DemoAccordionComponent {
  onePanel = false;
  @ViewChild('demo') demo;
  @ViewChild('ngAccord') ngAccord;
  @ViewChild('ng2Accord') ng2Accord;
  selectedPanel = 'one';
  @Output() evtToggle = new EventEmitter();

  constructor(config: NgbAccordionConfig) {
    config.type = 'info';
  }

  onDemoButtonChange() {
    this.onePanel = false;
  }

  ngAfterViewInit() {
    this.demo.buttonChange.subscribe(this.onDemoButtonChange.bind(this));
  }

  // this works fine, but also testing child subscribing to parent evtToggle event
  toggle(id) {

/*
    // this works as well with child injecting this comp in constructor and subscribing
    // to this event, just that the ViewChild calling child.toggle() is cleaner
    this.evtToggle.emit(id);
*/

    if (this.ngAccord) {
      this.ngAccord.toggle(id);
    }
    else if (this.ng2Accord) {
      this.ng2Accord.toggle(id);
    }
  }

  panels = [
    {
      id: 'one',
      title: 'title one',
      content: 'Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.'
    },
    {
      id: 'two',
      title: 'title two',
      content: 'Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.'
    },
    {
      id: 'three',
      title: 'title three',
      content: 'Lorem3 ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.'
    },
  ];

}
