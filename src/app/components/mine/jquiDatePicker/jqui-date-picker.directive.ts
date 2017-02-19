import {Directive, ElementRef, ApplicationRef, NgZone, Input, Output, EventEmitter} from '@angular/core';
declare var $:any;
import * as moment from 'moment';

@Directive({
  selector: '[jquiDatePicker]'
})
export class JquiDatePickerDirective {
  formatMoment = 'MM/DD/YYYY';
  formatJqui = 'mm/dd/yy';
  @Input() set date(val:string) {
    let dt = moment(val, this.formatMoment);
    if(dt.isValid()) {
      $(this.eref.nativeElement).datepicker('setDate', val);
    }
  };
  @Output() datePick = new EventEmitter();

  constructor(private eref:ElementRef) {
  }

  ngOnInit() {
    $(this.eref.nativeElement).datepicker({
      format: this.formatJqui,
      onClose: this.onClose.bind(this)
    });
  }

  onClose(date:string) {
    this.datePick.emit(date);
  }

}

