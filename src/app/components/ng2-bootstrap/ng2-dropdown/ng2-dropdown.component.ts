import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {BsDropdownDirective} from "ngx-bootstrap";

@Component({
  selector: 'ng2-dropdown',
  templateUrl: './ng2-dropdown.component.html',
  styleUrls: ['./ng2-dropdown.component.scss']
})
export class Ng2DropdownComponent {

  color: any;
  colors:any[] = [
    {id: 1, name: 'Red'},
    {id: 2, name: 'Green'},
    {id: 3, name: 'Blue'}
  ];
  _toggle = false;
  @ViewChild('dropdown') dropdown:BsDropdownDirective;

  @Input() set toggle(val:boolean) {
    if (val === undefined) {
      return;
    }

    this.dropdown.toggle();
  }
}
