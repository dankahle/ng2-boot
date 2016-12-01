import {ComponentFactoryResolver, ViewContainerRef, Component, Input, ComponentRef} from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'dk-dynamic',
  templateUrl: './dk-dynamic.component.html',
  entryComponents: [ChildComponent]
})
export class DkDynamicComponent {
  private compRef:ComponentRef<ChildComponent>;

  constructor(private viewContainer: ViewContainerRef,
              private compResolver: ComponentFactoryResolver) {
  }

  createChild() {
    this.compRef = this.viewContainer.createComponent(this.compResolver.resolveComponentFactory(ChildComponent));
    this.compRef.instance.age = 99;
    let subs = this.compRef.instance.vote.subscribe(x => console.log('voted: ' + x));
    this.compRef.onDestroy(() => {
      subs.unsubscribe();
    })
  }

  destroyChild() {
    this.compRef.destroy();
    this.compRef = null;
  }
}
