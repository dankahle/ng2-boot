import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {NgbAccordionConfig} from "@ng-bootstrap/ng-bootstrap";
import * as _ from 'lodash';

export class Panel {
  id:string;
  disabled:boolean;
  isOpen:boolean;
  title:string;
  content:string;
}

@Component({
  selector: 'demo-accordion',
  templateUrl: './demo-accordion.component.html',
  styleUrls: ['../../demo-content.scss', './demo-accordion.component.scss']
})
export class DemoAccordionComponent {
  panels:Panel[] = [];
  onePanel:boolean;
  selectedPanel:string;
  @ViewChild('demo') demo;
  @ViewChild('ngAccord') ngAccord;
  @ViewChild('ng2Accord') ng2Accord;
  @Output() evtToggle = new EventEmitter();

  constructor(config: NgbAccordionConfig) {
    config.type = 'info';
  }

  init() {
    this.onePanel = false;
    this.selectedPanel = 'one';
    this.panels = _.cloneDeep(this._panels);
  }

  onDemoButtonChange() {
    this.init();
  }

  ngAfterViewInit() {
    this.demo.buttonChange.subscribe(this.onDemoButtonChange.bind(this));
  }

  /**
   * toggle
   * @param id
   * @desc this works fine, but also testing child subscribing to parent evtToggle event
   */
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
      let panel:Panel = _.find(this.panels, {id: id});
      // ng2 allows toggling of disabled panels via isOpen
      if (!panel.disabled) {
        // ng2 crashes if you use isOpen to open > 1 panels and closeOthers is true, so we'll closeOthers here
        if (!panel.isOpen) {
          this.panels.forEach(x => x.isOpen = false);
        }
        panel.isOpen = !panel.isOpen;
      }
    }
  }

  disable(id) {
    let panel:Panel = _.find(this.panels, {id: id});
    panel.disabled = !panel.disabled;
  }


  _panels = [
    {
      id: 'one',
      disabled: false,
      isOpen: false,
      title: 'title one',
      content: 'Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.'
    },
    {
      id: 'two',
      disabled: false,
      isOpen: false,
      title: 'title two',
      content: 'Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.'
    },
    {
      id: 'three',
      disabled: false,
      isOpen: false,
      title: 'title three',
      content: 'Lorem3 ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.'
    },
  ];

}
