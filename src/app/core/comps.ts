import {Comp, CompGroup} from "./comp";
import {DemoAlertComponent} from "../components/demo/demo-alert/demo-alert.component";
import {DemoCollapseComponent} from "../components/demo/demo-collapse/demo-collapse.component";
import {DemoDynamicComponent} from "../components/demo/demo-dynamic/demo-dynamic.component";
import {DemoModalComponent} from "../components/demo/demo-modal/demo-modal.component";
import {DemoAccordionComponent} from "../components/demo/demo-accordion/demo-accordion.component";
import {DemoButtonsComponent} from "../components/demo/demo-buttons/demo-buttons.component";
import {DemoCarouselComponent} from "../components/demo/demo-carousel/demo-carousel.component";

export const comps: Comp[] = [
  {name: 'accordion', type: DemoAccordionComponent, group: CompGroup.boot},
  {name: 'alert', type: DemoAlertComponent, group: CompGroup.boot},
  {name: 'buttons', type: DemoButtonsComponent, group: CompGroup.boot},
  {name: 'carousel', type: DemoCarouselComponent, group: CompGroup.boot},
  {name: 'collapse', type: DemoCollapseComponent, group: CompGroup.boot},
  {name: 'modal', type: DemoModalComponent, group: CompGroup.boot},

  {name: 'dkDynamic', type: DemoDynamicComponent, group: CompGroup.mine}
];



