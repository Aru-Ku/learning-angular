import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'parseTime'
})
export class ParseTimePipe implements PipeTransform {

  transform(time: string): string {
    return moment(time).fromNow();
  }

}
