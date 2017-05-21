import {Component, Input, OnInit} from '@angular/core';
import {TabsSettings} from "../../demo/demo-tabs/demo-tabs.component";

@Component({
  selector: 'ng2-tabs',
  templateUrl: './ng2-tabs.component.html',
  styleUrls: ['./ng2-tabs.component.scss']
})
export class Ng2TabsComponent {
  @Input() settings: TabsSettings;
}
