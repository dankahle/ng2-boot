
import {Comp} from "./comp";
import {DemoAlertComponent} from "../components/demo/demo-alert/demo-alert.component";
import {DemoCollapseComponent} from "../components/demo/demo-collapse/demo-collapse.component";
import {DemoDynamicComponent} from "../components/demo/demo-dynamic/demo-dynamic.component";
import {DemoModalUsingCompComponent} from "../components/demo/demo-modal-using-comp/demo-modal-using-comp.component";

export const bootComps:Comp[] = [
   {name:'alert', type: DemoAlertComponent},
   {name:'collapse', type: DemoCollapseComponent},
   {name:'modal', type: DemoModalUsingCompComponent},
];

export const myComps:Comp[] = [
   {name:'dkDynamic', type: DemoDynamicComponent},
];


