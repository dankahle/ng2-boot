import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DkModalComponent} from "./mine/dk-modal/dk-modal.component";
import { NgAlertComponent } from './ng-bootstrap/ng-alert/ng-alert.component';
import { DkDynamicComponent } from './mine/dk-dynamic/dk-dynamic.component';
import { ChildComponent } from './mine/child/child.component';
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CollapseComponent } from './ng-bootstrap/collapse/collapse.component';
import {DemoAlertComponent} from "./demo/demo-alert/demo-alert.component";
import { DemoDynamicComponent } from './demo/demo-dynamic/demo-dynamic.component';
import { DemoCollapseComponent } from './demo/demo-collapse/demo-collapse.component';
import { Ng2AlertComponent } from './ng2-bootstrap/ng2-alert/ng2-alert.component';
import { DemoComponent } from './demo/demo/demo.component';
import { DemoChildComponent } from './demo/demo-child/demo-child.component';
import {DemoModalUsingCompComponent} from "./demo/demo-modal-using-comp/demo-modal-using-comp.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [DkModalComponent, NgAlertComponent, DkDynamicComponent, ChildComponent, CollapseComponent, DemoModalUsingCompComponent, DemoAlertComponent, DemoDynamicComponent, DemoCollapseComponent, Ng2AlertComponent, DemoComponent, DemoChildComponent],
  exports: [DkModalComponent, NgAlertComponent, DkDynamicComponent, ChildComponent, CollapseComponent, DemoModalUsingCompComponent, DemoAlertComponent, DemoDynamicComponent, DemoCollapseComponent, Ng2AlertComponent, DemoComponent],
  entryComponents: [DkModalComponent]
})
export class ComponentsModule { }
