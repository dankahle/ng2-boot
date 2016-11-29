import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DkModalComponent} from "./dk-modal/dk-modal.component";
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DkModalComponent, AlertComponent],
  exports: [DkModalComponent],
  entryComponents: [DkModalComponent]
})
export class ComponentsModule { }
