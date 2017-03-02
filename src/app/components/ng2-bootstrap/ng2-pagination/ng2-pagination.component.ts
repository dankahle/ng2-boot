import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {PaginationSettings} from "../../demo/demo-pagination/demo-pagination.component";

@Component({
  selector: 'ng2-pagination',
  templateUrl: './ng2-pagination.component.html',
  styleUrls: ['./ng2-pagination.component.scss']
})
export class Ng2PaginationComponent {

  @Input() settings:PaginationSettings;
  @Output() pageChange = new EventEmitter<number>();
  @Input() set setPagetoOne(val) {
    this.page = 1;
  }
  _page = 1;
  get page() {return this._page;}
  set page(val) {
    this.pageChange.emit(val - 1);
  }
}
