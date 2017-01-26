import {Comp, CompGroup} from "./comp";
import {DemoAlertComponent} from "../components/demo/demo-alert/demo-alert.component";
import {DemoCollapseComponent} from "../components/demo/demo-collapse/demo-collapse.component";
import {DemoDynamicComponent} from "../components/demo/demo-dynamic/demo-dynamic.component";
import {DemoModalComponent} from "../components/demo/demo-modal/demo-modal.component";
import {DemoAccordionComponent} from "../components/demo/demo-accordion/demo-accordion.component";

export const comps: Comp[] = [
  {name: 'accordion', type: DemoAccordionComponent, group: CompGroup.boot},
  {name: 'alert', type: DemoAlertComponent, group: CompGroup.boot},
  {name: 'collapse', type: DemoCollapseComponent, group: CompGroup.boot},
  {name: 'modal', type: DemoModalComponent, group: CompGroup.boot},

  {name: 'dkDynamic', type: DemoDynamicComponent, group: CompGroup.mine}
];



