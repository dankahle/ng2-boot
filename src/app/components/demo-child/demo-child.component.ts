import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'demo-child',
  templateUrl: './demo-child.component.html',
  styleUrls: ['./demo-child.component.scss']
})
export class DemoChildComponent {
  @Input() showComp = false;

  constructor() { }

  ngOnChanges(changes:SimpleChanges) {
    Object.keys(changes).forEach(x => {
      console.log('demochildchanges', x, changes[x]);
    })
  }

}
