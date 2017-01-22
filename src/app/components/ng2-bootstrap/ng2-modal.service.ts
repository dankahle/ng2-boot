import {
  Injectable, ComponentFactoryResolver, ViewContainerRef, EventEmitter, ComponentRef
} from '@angular/core';
import {Ng2ModalContainerDirective} from "./ng2-modal-container.directive";
import {Ng2ModalBaseComponent} from "./ng2-modal-base/ng2-modal-base.component";

@Injectable()
export class Ng2ModalService {
  private compRef: ComponentRef<any>;
  private inst: Ng2ModalBaseComponent;
  private container:Ng2ModalContainerDirective;

  registerContainer(container:Ng2ModalContainerDirective) {
    this.container = container;
  }

}
