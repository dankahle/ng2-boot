import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {NgbDropdown} from "@ng-bootstrap/ng-bootstrap";

interface Color {
  id:number,
  name:string
}

@Component({
  selector: 'ng-dropdown',
  templateUrl: './ng-dropdown.component.html',
  styleUrls: ['./ng-dropdown.component.scss']
})
export class NgDropdownComponent {
  color: Color;
  colors:Color[] = [
    {id: 1, name: 'Red'},
    {id: 2, name: 'Green'},
    {id: 3, name: 'Blue'}
    ];
  @ViewChild('dropdown') dropdown:NgbDropdown;
  afterContentInit = false;

  ngAfterContentInit() {
    this.afterContentInit = true;
  }

  @Input() set toggle(val:boolean) {

    if(val) {
      this.dropdown.open()
    }
    else {
      this.dropdown.close()
    }
  }

}
