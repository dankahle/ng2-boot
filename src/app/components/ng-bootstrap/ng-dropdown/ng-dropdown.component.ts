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

    // can't run by toggle boolean as it can get out of sync if they click on document to close
    if(this.dropdown.isOpen()) {
      this.dropdown.close()
    }
    else {
      this.dropdown.open()
    }
  }

}
