import {
  Injectable, ComponentFactoryResolver, ViewContainerRef, EventEmitter, ComponentRef
} from '@angular/core';
import {ChildComponent} from "../mine/child/child.component";
import {ModalDirective} from "ng2-bootstrap";

export interface INg2ModalInstance {
  modal:ModalDirective
  result: Promise<any>;
}

export interface INg2ModalShow {
  show(): INg2ModalInstance;
}

@Injectable()
export class Ng2ModalService {
  private compRef: ComponentRef<any>;
  private inst: INg2ModalShow;

  open(type: any,
       viewContainer: ViewContainerRef,
       compResolver: ComponentFactoryResolver): INg2ModalInstance {
    if (this.compRef) {
      this.compRef.destroy();
      viewContainer.clear();
    }
    this.compRef = viewContainer.createComponent(compResolver.resolveComponentFactory(type));
    this.inst = <INg2ModalShow>this.compRef.instance;
    return this.inst.show();
  }

}
