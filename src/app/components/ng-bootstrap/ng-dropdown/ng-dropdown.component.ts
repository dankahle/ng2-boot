import {Component, OnInit} from '@angular/core';

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
    ]
}
