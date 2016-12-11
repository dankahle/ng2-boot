import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-collapse',
  templateUrl: './ng-collapse.component.html',
  styleUrls: ['./ng-collapse.component.scss']
})
export class NgCollapseComponent implements OnInit {
  public isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
