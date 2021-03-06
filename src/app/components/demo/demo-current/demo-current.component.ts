import {Component, ComponentFactoryResolver, ViewContainerRef, ComponentRef, Input} from '@angular/core';
import {DemoModalComponent} from "../demo-modal/demo-modal.component";
import {DemoAlertComponent} from "../demo-alert/demo-alert.component";
import {DemoDynamicComponent} from "../demo-dynamic/demo-dynamic.component";
import {DemoCollapseComponent} from "../demo-collapse/demo-collapse.component";

@Component({
  selector: 'demo-current',
  templateUrl: './demo-current.component.html',
  styleUrls: ['../../demo-content.scss', './demo-current.component.scss']
})
export class DemoCurrentComponent {

   private compRef:ComponentRef<any>;

   constructor(private viewContainer: ViewContainerRef,
               private compResolver: ComponentFactoryResolver) {
   }

   @Input() set comp(type:any) {
      if (type) {
         if (this.compRef) {
            this.compRef.destroy();
            this.viewContainer.clear();
         }
         this.compRef = this.viewContainer.createComponent(this.compResolver.resolveComponentFactory(type));
      }
   }

}
