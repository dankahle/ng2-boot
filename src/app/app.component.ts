import {Component} from '@angular/core';
import {bootComps, myComps} from "./core/comps";

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   bootComps = bootComps;
   myComps = myComps;
   selectedComp:any;

}
