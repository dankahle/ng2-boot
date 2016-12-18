import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgAlertComponent } from './ng-bootstrap/ng-alert/ng-alert.component';
import { DkDynamicComponent } from './mine/dk-dynamic/dk-dynamic.component';
import { ChildComponent } from './mine/child/child.component';
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { NgCollapseComponent } from './ng-bootstrap/ng-collapse/ng-collapse.component';
import {DemoAlertComponent} from "./demo/demo-alert/demo-alert.component";
import { DemoDynamicComponent } from './demo/demo-dynamic/demo-dynamic.component';
import { DemoCollapseComponent } from './demo/demo-collapse/demo-collapse.component';
import { Ng2AlertComponent } from './ng2-bootstrap/ng2-alert/ng2-alert.component';
import { DemoComponent } from './demo/demo/demo.component';
import {DemoModalUsingCompComponent} from "./demo/demo-modal-using-comp/demo-modal-using-comp.component";
import { AlertModule, CollapseModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2CollapseComponent } from './ng2-bootstrap/ng2-collapse/ng2-collapse.component';
import { DemoCurrentComponent } from './demo/demo-current/demo-current.component';
import {ModalCompComponent} from "./ng-bootstrap/modal-comp/modal-comp.component";
import { ModalTempComponent } from './ng-bootstrap/modal-temp/modal-temp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AlertModule, CollapseModule
  ],
  declarations: [ModalCompComponent, NgAlertComponent, DkDynamicComponent, ChildComponent, NgCollapseComponent, DemoModalUsingCompComponent, DemoAlertComponent, DemoDynamicComponent, DemoCollapseComponent, Ng2AlertComponent, DemoComponent, Ng2CollapseComponent, DemoCurrentComponent, ModalTempComponent],
   exports: [DemoCurrentComponent, DemoModalUsingCompComponent, DemoAlertComponent, DemoDynamicComponent, DemoCollapseComponent],
  entryComponents: [ModalCompComponent]
})
export class ComponentsModule { }
