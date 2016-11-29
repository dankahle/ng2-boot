import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DkModalComponent} from "./dk-modal/dk-modal.component";
import { AlertComponent } from './alert/alert.component';
import { DkDynamicComponent } from './dk-dynamic/dk-dynamic.component';
import { ChildComponent } from './child/child.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DkModalComponent, AlertComponent, DkDynamicComponent, ChildComponent],
  exports: [DkModalComponent, AlertComponent, DkDynamicComponent, ChildComponent],
  entryComponents: [DkModalComponent]
})
export class ComponentsModule { }
