import {Component, OnInit, Input, ElementRef, ContentChild, ViewChild, ApplicationRef} from '@angular/core';

@Component({
   selector: 'demo',
   templateUrl: './demo.component.html',
   styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

   @Input() hasButtons = true;
   @Input() hasNg = true;
   @Input() hasNg2 = true;
   ngShow = false;
   ng2Show = false;

   toggle(val) {
      if (val === 'ng' && this.ngShow) {
         this.ngShow = false;
      }
      else if (val === 'ng2' && this.ng2Show) {
         this.ng2Show = false;
      }
      else if (val === 'ng') {
         this.ngShow = true;
         this.ng2Show = false;
      }
      else if (val === 'ng2') {
         this.ngShow = false;
         this.ng2Show = true;
      }
   }

}
