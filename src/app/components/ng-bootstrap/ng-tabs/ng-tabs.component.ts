import {Component, Input, OnInit} from '@angular/core';
import {TabsSettings} from "../../demo/demo-tabs/demo-tabs.component";

@Component({
  selector: 'ng-tabs',
  templateUrl: './ng-tabs.component.html',
  styleUrls: ['./ng-tabs.component.scss']
})
export class NgTabsComponent {
  @Input() settings: TabsSettings;
}

