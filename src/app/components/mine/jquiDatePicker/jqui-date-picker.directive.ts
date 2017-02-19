import {Directive, ElementRef, ApplicationRef, NgZone, Input, Output, EventEmitter} from '@angular/core';
declare var $: any;
import * as moment from 'moment';
import * as _ from 'lodash';
import {JquiDatepickerConfigService} from "./jqui-datepicker-config.service";

@Directive({
  selector: '[jquiDatePicker]'
})
export class JquiDatePickerDirective {
  formatMoment = 'MM/DD/YYYY';

  @Input() set date(val: string) {
    let dt = moment(val, this.formatMoment);
    if (dt.isValid()) {
      $(this.eref.nativeElement).datepicker('setDate', val);
    }
  };

  @Input() config: Object;
  @Output() datePick = new EventEmitter();

  constructor(private eref: ElementRef, private globalConfig: JquiDatepickerConfigService) {
  }

  ngOnInit() {
    let _config = _.merge(
      _.cloneDeep(this.globalConfig),
      this.config || {},
      {
        onClose: this.onClose.bind(this)
      });

    $(this.eref.nativeElement).datepicker(_config);
  }

  onClose(date: string) {
    this.datePick.emit(date);
  }

}

