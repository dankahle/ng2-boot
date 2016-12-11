import {Component, OnInit, Input, ElementRef, ContentChild, ViewChild, ApplicationRef} from '@angular/core';
import {DemoChildComponent} from "../demo-child/demo-child.component";

@Component({
   selector: 'demo',
   templateUrl: './demo.component.html',
   styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

   _showNg = false;
   _showNg2 = false;

   get showNg() {
      return this._showNg;
   }
   set showNg(val: boolean) {
      this._showNg = val;
   }

   get showNg2() {
      return this._showNg2;
   }
   set showNg2(val: boolean) {
      this._showNg2 = val;
   }

}
