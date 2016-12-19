import {Component, ViewContainerRef, ApplicationRef} from '@angular/core';
import {comps} from "./core/comps";
import {Comp, CompGroup} from "./core/comp";

import { ComponentsHelper } from 'ng2-bootstrap/ng2-bootstrap'


// ng2-bootstrap hack to fix modal error. this is in 1.1.16 but if I go to 1.1.16-7 I get another error I can't figure out,
// at least this one has a fix, so will run with 1.1.16 for now
ComponentsHelper.prototype.getRootViewContainerRef = function () {
  // https://github.com/angular/angular/issues/9293
  if (this.root) {
    return this.root;
  }
  var comps = this.applicationRef.components;
  if (!comps.length) {
    throw new Error("ApplicationRef instance not found");
  }
  try {
    /* one more ugly hack, read issue above for details */
    var rootComponent = this.applicationRef._rootComponents[0];
    //this.root = rootComponent._hostElement.vcRef;
    this.root = rootComponent._component.viewContainerRef;
    return this.root;
  }
  catch (e) {
    throw new Error("ApplicationRef instance not found");
  }
};

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
