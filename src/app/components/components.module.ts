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
import { AlertModule, CollapseModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { Ng2CollapseComponent } from './ng2-bootstrap/ng2-collapse/ng2-collapse.component';
import { DemoCurrentComponent } from './demo/demo-current/demo-current.component';
import {NgModalCompComponent} from "./ng-bootstrap/ng-modal-comp/ng-modal-comp.component";
import { DemoModalTempComponent } from './demo/demo-modal-temp/demo-modal-temp.component';
import {NgModalTempComponent} from "./ng-bootstrap/ng-modal-temp/ng-modal-temp.component";
import { Ng2ModalTempComponent } from './ng2-bootstrap/ng2-modal-temp/ng2-modal-temp.component';
import { Ng2ModalTempCompComponent } from './ng2-bootstrap/ng2-modal-temp-comp/ng2-modal-temp-comp.component';
import { DemoModalTempCompComponent } from './demo/demo-modal-temp-comp/demo-modal-temp-comp.component';
import {Ng2ModalService} from "./ng2-bootstrap/ng2-modal.service";
import { DemoModalTempComp2Component } from './demo/demo-modal-temp-comp2/demo-modal-temp-comp2.component';
import { Ng2ModalTempComp2Component } from './ng2-bootstrap/ng2-modal-temp-comp2/ng2-modal-temp-comp2.component';
import { Ng2ModalTempCompBaseComponent } from './ng2-bootstrap/ng2-modal-temp-comp-base/ng2-modal-temp-comp-base.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AlertModule, CollapseModule, ModalModule
  ],
  providers: [Ng2ModalService],
  declarations: [NgModalCompComponent, NgAlertComponent, DkDynamicComponent, ChildComponent, NgCollapseComponent, DemoModalUsingCompComponent, DemoAlertComponent, DemoDynamicComponent, DemoCollapseComponent, Ng2AlertComponent, DemoComponent, Ng2CollapseComponent, DemoCurrentComponent, DemoModalTempComponent, NgModalTempComponent, Ng2ModalTempComponent, Ng2ModalTempCompComponent, DemoModalTempCompComponent, DemoModalTempComp2Component, Ng2ModalTempComp2Component],
   exports: [DemoCurrentComponent],
   entryComponents: [DemoModalUsingCompComponent, DemoAlertComponent, DemoDynamicComponent, DemoCollapseComponent, DemoModalTempComponent,
     NgModalCompComponent, DemoModalTempCompComponent, Ng2ModalTempCompComponent, DemoModalTempComp2Component],

})
export class ComponentsModule { }
