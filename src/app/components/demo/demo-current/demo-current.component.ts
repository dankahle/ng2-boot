import {Component, ComponentFactoryResolver, ViewContainerRef, ComponentRef, Input} from '@angular/core';
import {DemoModalUsingCompComponent} from "../demo-modal-using-comp/demo-modal-using-comp.component";
import {DemoAlertComponent} from "../demo-alert/demo-alert.component";
import {DemoDynamicComponent} from "../demo-dynamic/demo-dynamic.component";
import {DemoCollapseComponent} from "../demo-collapse/demo-collapse.component";

@Component({
  selector: 'demo-current',
  templateUrl: './demo-current.component.html',
  styleUrls: ['./demo-current.component.scss'],
   entryComponents: [DemoModalUsingCompComponent, DemoAlertComponent, DemoDynamicComponent, DemoCollapseComponent],

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
