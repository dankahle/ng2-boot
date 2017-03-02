import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {PaginationSettings} from "../../demo/demo-pagination/demo-pagination.component";

@Component({
  selector: 'ng-pagination',
  templateUrl: './ng-pagination.component.html',
  styleUrls: ['./ng-pagination.component.scss']
})
export class NgPaginationComponent {
  @Input() settings:PaginationSettings;
  @Output() pageChange = new EventEmitter<number>();
  _page = 1;
  get page() {return this._page;}
  set page(val) {
    this.pageChange.emit(val - 1);
  }

}
