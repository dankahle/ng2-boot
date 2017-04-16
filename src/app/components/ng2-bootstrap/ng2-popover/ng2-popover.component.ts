import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ng2-popover',
  templateUrl: './ng2-popover.component.html',
  styleUrls: ['./ng2-popover.component.scss']
})
export class Ng2PopoverComponent {

  @Input() position:string;
  name = 'dank';

}
