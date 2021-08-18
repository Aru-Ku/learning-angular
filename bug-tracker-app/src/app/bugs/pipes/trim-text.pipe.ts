import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText'
})
export class TrimTextPipe implements PipeTransform {

  transform(bugName: string, maxLength: number = 30, minLength: number = 0): string {
    return bugName.length >= maxLength ? `${bugName.substr(minLength,maxLength)} ...` : bugName;
  }

}
