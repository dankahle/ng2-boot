import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DemoAlertComponent} from "./demo-alert/demo-alert.component";
import {DemoModalUsingCompComponent} from "./modal-using-comp/demo-modal-using-comp.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { DemoDynamicComponent } from './demo-dynamic/demo-dynamic.component';
import {ComponentsModule} from "../components/components.module";
import { DemoCollapseComponent } from './demo-collapse/demo-collapse.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ComponentsModule
  ],
  declarations: [
    DemoModalUsingCompComponent,
    DemoAlertComponent,
    DemoDynamicComponent,
    DemoCollapseComponent
  ],
  exports: [
    DemoModalUsingCompComponent,
    DemoAlertComponent,
    DemoDynamicComponent,
    DemoCollapseComponent
  ],
})
export class DemoModule { }
