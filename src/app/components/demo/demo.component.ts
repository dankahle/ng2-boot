import {Component, OnInit, Input, ElementRef, ContentChild, ViewChild} from '@angular/core';
import {DemoChildComponent} from "../demo-child/demo-child.component";

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  showComponents = false;
  _showComp = '';
  @Input() title:string;
  @Input() description:string;
  @ContentChild('ngComp') ngComp:DemoChildComponent;
  @ContentChild('ng2Comp') ng2Comp:DemoChildComponent;

  constructor() { }

  get showComp() {
    return this._showComp;
  }

  set showComp(val:string) {
    this._showComp = val;
    this.ngComp.showComp = this._showComp === 'ngComp';
    this.ng2Comp.showComp = this._showComp === 'ng2Comp';
  }

  ngAfterContentInit() {
  }

}
