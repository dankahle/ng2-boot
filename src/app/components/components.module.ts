import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DkModalComponent} from "./dk-modal/dk-modal.component";
import { AlertComponent } from './alert/alert.component';
import { DkDynamicComponent } from './dk-dynamic/dk-dynamic.component';
import { ChildComponent } from './child/child.component';
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CollapseComponent } from './collapse/collapse.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [DkModalComponent, AlertComponent, DkDynamicComponent, ChildComponent, CollapseComponent],
  exports: [DkModalComponent, AlertComponent, DkDynamicComponent, ChildComponent, CollapseComponent],
  entryComponents: [DkModalComponent]
})
export class ComponentsModule { }
