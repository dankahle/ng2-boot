import {Component} from '@angular/core';
import {comps} from "./core/comps";
import {CompGroup} from "./core/comp";

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   bootComps = comps.filter(x => x.group === CompGroup.boot);
   myComps = comps.filter(x => x.group === CompGroup.mine);
   selectedComp:any;

}
