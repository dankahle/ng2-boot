import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DemoAlertComponent} from "./demo-alert/demo-alert.component";
import {DemoModalUsingCompComponent} from "./modal-using-comp/demo-modal-using-comp.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
  ],
  declarations: [DemoModalUsingCompComponent, DemoAlertComponent],
  exports: [DemoModalUsingCompComponent, DemoAlertComponent]
})
export class DemoModule { }
