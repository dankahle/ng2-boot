import {Comp, CompGroup} from "./comp";
import {DemoAlertComponent} from "../components/demo/demo-alert/demo-alert.component";
import {DemoCollapseComponent} from "../components/demo/demo-collapse/demo-collapse.component";
import {DemoDynamicComponent} from "../components/demo/demo-dynamic/demo-dynamic.component";
import {DemoModalUsingCompComponent} from "../components/demo/demo-modal-using-comp/demo-modal-using-comp.component";
import {DemoModalTempComponent} from "../components/demo/demo-modal-temp/demo-modal-temp.component";
import {DemoModalTempCompComponent} from "../components/demo/demo-modal-temp-comp/demo-modal-temp-comp.component";
import {DemoModalTempComp2Component} from "../components/demo/demo-modal-temp-comp2/demo-modal-temp-comp2.component";

export const comps: Comp[] = [
  {name: 'alert', type: DemoAlertComponent, group: CompGroup.boot},
  {name: 'collapse', type: DemoCollapseComponent, group: CompGroup.boot},
  {name: 'modal-comp', type: DemoModalUsingCompComponent, group: CompGroup.boot},
  {name: 'modal-temp', type: DemoModalTempComponent, group: CompGroup.boot},
  {name: 'modal-temp-comp', type: DemoModalTempCompComponent, group: CompGroup.boot},
  {name: 'modal-temp-comp2', type: DemoModalTempComp2Component, group: CompGroup.boot},




  {name: 'dkDynamic', type: DemoDynamicComponent, group: CompGroup.mine}
];



