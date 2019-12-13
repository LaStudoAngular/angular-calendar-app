import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentf',
  // очень плохо
  // TODO: replace by filter
  pure: false,
})
export class MomentPipe implements PipeTransform {
  transform(value: moment.Moment, view = 'MMMM YYYY'): string {
    return value.format(view);
  }
}
