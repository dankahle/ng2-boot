import {Component, OnInit, ViewChild} from '@angular/core';
import {DemoComponent} from "../demo/demo.component";
import * as _ from 'lodash';

export class TabsSettings {
  justify:string;//ng
  justified:boolean;//ng2
  type: string;//both
  sticky: boolean; //ng
  vertical: boolean;//ng2
}

@Component({
  selector: 'demo-tabs',
  templateUrl: './demo-tabs.component.html',
  styleUrls: ['../../demo-content.scss', './demo-tabs.component.scss']
})
export class DemoTabsComponent {
  @ViewChild('demo') demo:DemoComponent;
  settings:TabsSettings;
  justifys = ['start', 'center', 'end'];
  types = ['tabs', 'pills'];
  tabs = ['one', 'two', 'three'];

  constructor() {
    this.init();
  }

  init() {
    this.settings = <TabsSettings> _.clone({
      justify: 'start',
      justified: false,
      type: 'tabs',
      sticky: false,
      vertical: false,
    });
  }

  ngAfterViewInit() {
    this.demo.buttonChange.subscribe(() => this.init());
  }

}


