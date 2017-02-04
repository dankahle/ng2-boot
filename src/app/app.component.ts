import {Component, ViewContainerRef, ApplicationRef, ViewChild} from '@angular/core';
import {comps} from "./core/comps";
import {Comp, CompGroup} from "./core/comp";

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   bootComps = comps.filter(x => x.group === CompGroup.boot);
   myComps = comps.filter(x => x.group === CompGroup.mine);
   selectedComp:any;

   // ng2-bootstrap modal: You need this small hack in order to catch application root view container ref
   public constructor(private viewContainerRef:ViewContainerRef) {
   }

}
