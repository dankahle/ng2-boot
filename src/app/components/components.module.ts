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
import {
  AlertModule, CollapseModule, ModalModule, AccordionModule, ButtonsModule, CarouselModule,
  DatepickerModule
} from 'ng2-bootstrap';

import { Ng2CollapseComponent } from './ng2-bootstrap/ng2-collapse/ng2-collapse.component';
import { DemoCurrentComponent } from './demo/demo-current/demo-current.component';
import {NgModalComponent} from "./ng-bootstrap/ng-modal/ng-modal.component";
import { NgModalBaseComponent } from './ng-bootstrap/ng-modal-base/ng-modal-base.component';
import {DemoModalComponent} from "./demo/demo-modal/demo-modal.component";
import {Ng2ModalComponent} from "./ng2-bootstrap/ng2-modal/ng2-modal.component";
import { DemoAccordionComponent } from './demo/demo-accordion/demo-accordion.component';
import { Ng2AccordionComponent } from './ng2-bootstrap/ng2-accordion/ng2-accordion.component';
import { NgAccordionComponent } from './ng-bootstrap/ng-accordion/ng-accordion.component';
import { DemoButtonsComponent } from './demo/demo-buttons/demo-buttons.component';
import { Ng2ButtonsComponent } from './ng2-bootstrap/ng2-buttons/ng2-buttons.component';
import { NgButtonsComponent } from './ng-bootstrap/ng-buttons/ng-buttons.component';
import { DemoCarouselComponent } from './demo/demo-carousel/demo-carousel.component';
import { NgCarouselComponent } from './ng-bootstrap/ng-carousel/ng-carousel.component';
import { Ng2CarouselComponent } from './ng2-bootstrap/ng2-carousel/ng2-carousel.component';
import { DemoDatePickerComponent } from './demo/demo-date-picker/demo-date-picker.component';
import { NgDatePickerComponent } from './ng-bootstrap/ng-date-picker/ng-date-picker.component';
import { Ng2DatePickerComponent } from './ng2-bootstrap/ng2-date-picker/ng2-date-picker.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AlertModule.forRoot(), CollapseModule.forRoot(), ModalModule.forRoot(), AccordionModule.forRoot(), ButtonsModule.forRoot(), CarouselModule.forRoot(), DatepickerModule.forRoot()
  ],
  providers: [],
  declarations: [NgModalComponent, NgAlertComponent, DkDynamicComponent, ChildComponent, NgCollapseComponent, DemoModalComponent,
    DemoAlertComponent, DemoDynamicComponent, DemoCollapseComponent, Ng2AlertComponent, DemoComponent, Ng2CollapseComponent,
    DemoCurrentComponent, NgModalComponent, Ng2ModalComponent, NgModalBaseComponent, DemoAccordionComponent,
    Ng2AccordionComponent, NgAccordionComponent, DemoButtonsComponent, Ng2ButtonsComponent, NgButtonsComponent, DemoCarouselComponent, NgCarouselComponent, Ng2CarouselComponent, DemoDatePickerComponent, NgDatePickerComponent, Ng2DatePickerComponent],

   exports: [DemoCurrentComponent],

   entryComponents: [DemoModalComponent, DemoAlertComponent, DemoDynamicComponent, DemoCollapseComponent, DemoModalComponent,
     NgModalComponent, Ng2ModalComponent, DemoAccordionComponent, DemoButtonsComponent, DemoCarouselComponent, DemoDatePickerComponent],

})
export class ComponentsModule { }

