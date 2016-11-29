import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DemoAlertComponent} from "./demo-alert/demo-alert.component";
import {DemoModalUsingCompComponent} from "./modal-using-comp/demo-modal-using-comp.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { DemoDynamicComponent } from './demo-dynamic/demo-dynamic.component';
import {ComponentsModule} from "../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ComponentsModule
  ],
  declarations: [DemoModalUsingCompComponent, DemoAlertComponent, DemoDynamicComponent],
  exports: [DemoModalUsingCompComponent, DemoAlertComponent, DemoDynamicComponent],
})
export class DemoModule { }
