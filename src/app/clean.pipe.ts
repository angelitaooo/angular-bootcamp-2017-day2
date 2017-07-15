import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clean'
})
export class CleanPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const withoutSlash = value.split(/\//); // remove slash
    const wordWithoutSlash = withoutSlash[1] || withoutSlash[0]; // get the appropiate one
    const cleanWord = wordWithoutSlash.split(/\s/g)[0]; // remove space

    return cleanWord; // return clean word
  }
}
