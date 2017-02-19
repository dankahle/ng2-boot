import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'demo-dropdown',
  templateUrl: './demo-dropdown.component.html',
  styleUrls: ['../../demo-content.scss', './demo-dropdown.component.scss']
})
export class DemoDropdownComponent {
  @ViewChild('demo') demo;
  toggle = false;

  init() {
    this.toggle = false;
  }

  onDemoButtonChange() {
    this.init();
  }

  ngAfterViewInit() {
    this.demo.buttonChange.subscribe(this.onDemoButtonChange.bind(this));
  }

}

