import {
  Injectable, ComponentFactoryResolver, ViewContainerRef, EventEmitter, ComponentRef
} from '@angular/core';
import {ChildComponent} from "../mine/child/child.component";
import {ModalDirective} from "ng2-bootstrap";
import {Ng2ModalTempCompBaseComponent} from "./ng2-modal-temp-comp-base/ng2-modal-temp-comp-base.component";
import {Ng2ModalContainerDirective} from "./ng2-modal-container.directive";

export interface INg2ModalInstance {
  modal:any,
  result: Promise<any>;
}

export interface INg2ModalShow {
  show(): INg2ModalInstance;
}

@Injectable()
export class Ng2ModalService {
  private compRef: ComponentRef<any>;
  private inst: Ng2ModalTempCompBaseComponent;
  private container:Ng2ModalContainerDirective;

  registerContainer(container:Ng2ModalContainerDirective) {
    this.container = container;
  }

  open(type: any): INg2ModalInstance {
    if(!this.container) {
      console.error('Ng2ModalService requires Ng2ModalContainerDirective in app root component.')
      return;
    }

    if (this.compRef) {
      this.compRef.destroy();
      this.container.viewContainer.clear();
    }
    this.compRef = this.container.viewContainer.createComponent(this.container.compResolver.resolveComponentFactory(type));
    this.inst = <Ng2ModalTempCompBaseComponent>this.compRef.instance;
    return this.inst.show();
  }

}
