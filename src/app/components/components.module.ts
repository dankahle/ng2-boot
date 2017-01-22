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
import { AlertModule, CollapseModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { Ng2CollapseComponent } from './ng2-bootstrap/ng2-collapse/ng2-collapse.component';
import { DemoCurrentComponent } from './demo/demo-current/demo-current.component';
import {NgModalCompComponent} from "./ng-bootstrap/ng-modal-comp/ng-modal-comp.component";
import {NgModalTempComponent} from "./ng-bootstrap/ng-modal-temp/ng-modal-temp.component";
import {Ng2ModalService} from "./ng2-bootstrap/ng2-modal.service";
import { Ng2ModalContainerDirective } from './ng2-bootstrap/ng2-modal-container.directive';
import { NgModalBaseComponent } from './ng-bootstrap/ng-modal-base/ng-modal-base.component';
import {DemoModalComponent} from "./demo/demo-modal/demo-modal.component";
import {Ng2ModalComponent} from "./ng2-bootstrap/ng2-modal/ng2-modal.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AlertModule, CollapseModule, ModalModule
  ],
  providers: [Ng2ModalService],
  declarations: [NgModalCompComponent, NgAlertComponent, DkDynamicComponent, ChildComponent, NgCollapseComponent, DemoModalComponent, DemoAlertComponent, DemoDynamicComponent, DemoCollapseComponent, Ng2AlertComponent, DemoComponent, Ng2CollapseComponent, DemoCurrentComponent, NgModalCompComponent, Ng2ModalComponent, Ng2ModalContainerDirective, NgModalBaseComponent],
   exports: [DemoCurrentComponent, Ng2ModalContainerDirective],
   entryComponents: [DemoModalComponent, DemoAlertComponent, DemoDynamicComponent, DemoCollapseComponent, DemoModalComponent,
     NgModalCompComponent, Ng2ModalComponent],

})
export class ComponentsModule { }
