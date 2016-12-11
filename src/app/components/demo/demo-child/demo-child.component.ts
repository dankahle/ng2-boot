import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'demo-child',
  templateUrl: './demo-child.component.html',
  styleUrls: ['./demo-child.component.scss']
})
export class DemoChildComponent {
  // @Input() showComp = false;
  @Input() val:string;
  @Input() type:string;

  _showComp = false;
  get showComp() {
    return this._showComp;
  }

  @Input() set showComp(val:boolean) {
    this._showComp = val;
  }

  constructor() {
    console.log('demochild const', this.type);
  }

  ngOnChanges(changes:SimpleChanges) {
    Object.keys(changes).forEach(x => {
      console.log('demochildchanges', x, changes[x]);
    })
  }

}
