import {Component, OnInit, ViewChild} from '@angular/core';
import {DemoComponent} from "../demo/demo.component";

export class PaginationSettings {
  showFirstLast = true;
  showPrevNext = true;
  itemCount:number;
  maxPages:number;
  pageSize = 5;

  constructor() {}
}

@Component({
  selector: 'demo-pagination',
  templateUrl: './demo-pagination.component.html',
  styleUrls: ['./demo-pagination.component.scss']
})
export class DemoPaginationComponent {
  @ViewChild('demo') demo:DemoComponent;
  @ViewChild('pageDiv') pageDiv;
  settings = new PaginationSettings();
  lines:string[];
  page:string[];
  pageNo = 0;
  _itemCount:number;
  get itemCount() {return this._itemCount;}
  set itemCount(val:number) {
    this._itemCount = val;
    this.settings.itemCount = val;
    this.getLines();
  }
  initialPageSize = 5;
  _pageSize:number;
  get pageSize() {return this._pageSize;}
  set pageSize(val:number) {
    this._pageSize = val;
    this.settings.pageSize = val;
    if (this.pageDiv) {
      this.setPageDivHeight(this.pageSize);
      this.pageDiv.nativeElement.style.height = '' + 24 * this.pageSize + 'px';
    }
    this.getLines();
  }

  constructor() {
    this.init();

  }

  setPageDivHeight(pageSize) {
    this.pageDiv.nativeElement.style.height = '' + (24 * pageSize + 3) + 'px';
  }

  ngAfterViewInit() {
    this.demo.buttonChange.subscribe(() => {this.init();})
    this.setPageDivHeight(this.initialPageSize);// can't access div before this, but can't call init after doCheck either, so we'll set it here initially
  }

  init() {
    this.settings = new PaginationSettings();
    this.itemCount = 27;
    this.pageSize = this.initialPageSize;
    this.getLines();
  }

  getLines() {
    let lines = [];
    for(let i=0; i < this.itemCount; i++) {
      lines.push(`another line, index: ${i}`);
    }
    this.lines = lines;
    this.setPage(this.pageNo, true);
  }

  setPage(pageNo, dontChangePage?:boolean) {

    if (dontChangePage) {
      this.pageNo = pageNo;
    }
    let start = this.pageNo * this.settings.pageSize;
    let end = start + this.settings.pageSize;
    end = end > this.itemCount? this.itemCount: end;
    this.page = this.lines.slice(start, end);
  }

}
