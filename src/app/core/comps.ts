import {Comp, CompGroup} from "./comp";
import {DemoAlertComponent} from "../components/demo/demo-alert/demo-alert.component";
import {DemoCollapseComponent} from "../components/demo/demo-collapse/demo-collapse.component";
import {DemoDynamicComponent} from "../components/demo/demo-dynamic/demo-dynamic.component";
import {DemoModalComponent} from "../components/demo/demo-modal/demo-modal.component";

export const comps: Comp[] = [
  {name: 'alert', type: DemoAlertComponent, group: CompGroup.boot},
  {name: 'collapse', type: DemoCollapseComponent, group: CompGroup.boot},
  {name: 'modal', type: DemoModalComponent, group: CompGroup.boot},

  {name: 'dkDynamic', type: DemoDynamicComponent, group: CompGroup.mine}
];



