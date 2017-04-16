import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ng-popover',
  templateUrl: './ng-popover.component.html',
  styleUrls: ['./ng-popover.component.scss']
})
export class NgPopoverComponent {
  @Input() position:string;
  name = 'dank';

}
