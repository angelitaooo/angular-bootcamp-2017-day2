import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(wordToTransform: string): string {
    const words = wordToTransform.split(' ');
    const result = words.map((word, i) => {
      const newWord = word.split('');
      newWord[0] = newWord[0].toUpperCase();

      return newWord.join('');
    }).join(' ');

    return result;
  }

}

