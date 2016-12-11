import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  _name = '<no name>';
  @Input() age:number;
  count = 0;
  voteVal:boolean = true;

  constructor() {
    console.log('child const');
  }

  add() {this.count++;}
  sub() {this.count--;}

  voteIt(val) {
    this.vote.emit(val);
  }

  get name() { return this._name; }
  @Input() set name(name) {
    this._name = (name && name.trim()) || 'not name';
  }

  @Output() vote = new EventEmitter<boolean>();

}
