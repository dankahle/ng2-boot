import {NgbDateParserFormatter, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import * as moment from 'moment';

export class DkParserFormatter extends NgbDateParserFormatter {
  parse(value: string): NgbDateStruct {
    if (value) {
      let m = moment(value, 'MM/DD/YYYY');
      if (m.isValid()) {
        return ngbDateStructFromDate(m.toDate());
      }
      else {
        return null;
      }
    }
    return null;
  }

  format(struct: NgbDateStruct): string {
    if (struct) {
      return moment(ngbDateStructToDate(struct)).format('MM/DD/YYYY');
    }
    else {
      return null;
    }
  }

}

function ngbDateStructFromDate(date) {
  if (date) {
    return {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()}
  }
}

function ngbDateStructToDate(struct) {
  if (struct) {
    return new Date(struct.year, struct.month-1, struct.day);
  }
}
