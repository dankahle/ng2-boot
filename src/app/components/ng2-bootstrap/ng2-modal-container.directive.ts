import {Directive, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {Ng2ModalService} from "./ng2-modal.service";

@Directive({
  selector: 'template[ng2ModalContainer]'
})
export class Ng2ModalContainerDirective {

  constructor(public viewContainer: ViewContainerRef,
              public compResolver: ComponentFactoryResolver,
              ng2ModalService: Ng2ModalService) {

    ng2ModalService.registerContainer(this);
  }

}
