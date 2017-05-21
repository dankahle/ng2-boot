import {Comp, CompGroup} from "./comp";
import {DemoAlertComponent} from "../components/demo/demo-alert/demo-alert.component";
import {DemoCollapseComponent} from "../components/demo/demo-collapse/demo-collapse.component";
import {DemoDynamicComponent} from "../components/demo/demo-dynamic/demo-dynamic.component";
import {DemoModalComponent} from "../components/demo/demo-modal/demo-modal.component";
import {DemoAccordionComponent} from "../components/demo/demo-accordion/demo-accordion.component";
import {DemoButtonsComponent} from "../components/demo/demo-buttons/demo-buttons.component";
import {DemoCarouselComponent} from "../components/demo/demo-carousel/demo-carousel.component";
import {DemoDatePickerComponent} from "../components/demo/demo-date-picker/demo-date-picker.component";
import {DemoJquiDatePickerComponent} from "../components/demo/demo-jqui-date-picker/demo-jqui-date-picker.component";
import {DemoDropdownComponent} from "../components/demo/demo-dropdown/demo-dropdown.component";
import {DemoPaginationComponent} from "../components/demo/demo-pagination/demo-pagination.component";
import {DemoPopoverComponent} from "../components/demo/demo-popover/demo-popover.component";
import {DemoProgressbarComponent} from "../components/demo/demo-progressbar/demo-progressbar.component";
import {DemoRatingComponent} from "../components/demo/demo-rating/demo-rating.component";
import {DemoTabsComponent} from "../components/demo/demo-tabs/demo-tabs.component";

export const comps: Comp[] = [
  {name: 'accordion', type: DemoAccordionComponent, group: CompGroup.boot},
  {name: 'alert', type: DemoAlertComponent, group: CompGroup.boot},
  {name: 'buttons', type: DemoButtonsComponent, group: CompGroup.boot},
  {name: 'carousel', type: DemoCarouselComponent, group: CompGroup.boot},
  {name: 'collapse', type: DemoCollapseComponent, group: CompGroup.boot},
  {name: 'datepicker', type: DemoDatePickerComponent, group: CompGroup.boot},
  {name: 'dropdown', type: DemoDropdownComponent, group: CompGroup.boot},
  {name: 'modal', type: DemoModalComponent, group: CompGroup.boot},
  {name: 'pagination', type: DemoPaginationComponent, group: CompGroup.boot},
  {name: 'popover', type: DemoPopoverComponent, group: CompGroup.boot},
  {name: 'progressbar', type: DemoProgressbarComponent, group: CompGroup.boot},
  {name: 'rating', type: DemoRatingComponent, group: CompGroup.boot},
  {name: 'tabs', type: DemoTabsComponent, group: CompGroup.boot},

  {name: 'dkDynamic', type: DemoDynamicComponent, group: CompGroup.mine},
  {name: 'jquiDatePicker', type: DemoJquiDatePickerComponent, group: CompGroup.mine}
];



