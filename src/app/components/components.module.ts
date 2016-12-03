import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DkModalComponent} from "./dk-modal/dk-modal.component";
import { AlertComponent } from './alert/alert.component';
import { DkDynamicComponent } from './dk-dynamic/dk-dynamic.component';
import { ChildComponent } from './child/child.component';
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CollapseComponent } from './collapse/collapse.component';
import {DemoAlertComponent} from "./demo-alert/demo-alert.component";
import {DemoModalUsingCompComponent} from "./modal-using-comp/demo-modal-using-comp.component";
import { DemoDynamicComponent } from './demo-dynamic/demo-dynamic.component';
import { DemoCollapseComponent } from './demo-collapse/demo-collapse.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [DkModalComponent, AlertComponent, DkDynamicComponent, ChildComponent, CollapseComponent, DemoModalUsingCompComponent, DemoAlertComponent, DemoDynamicComponent, DemoCollapseComponent],
  exports: [DkModalComponent, AlertComponent, DkDynamicComponent, ChildComponent, CollapseComponent, DemoModalUsingCompComponent, DemoAlertComponent, DemoDynamicComponent, DemoCollapseComponent],
  entryComponents: [DkModalComponent]
})
export class ComponentsModule { }
