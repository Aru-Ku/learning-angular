import { Pipe, PipeTransform } from '@angular/core';
import { Bug } from '../models/bug';

@Pipe({
  name: 'closedCountNo'
})
export class ClosedCountNoPipe implements PipeTransform {

  transform(bugs: Bug[]): number {
    return bugs.filter((bug: Bug) => bug.isClosed).length
  }

}
