import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FilterUniquePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filterUnique',
})
export class FilterUniquePipe implements PipeTransform {

  transform(value: any): any {

    /* let firsword: any;
    let secondword: any;
    let words: any;


    words = value.split(' ').toString();


    let word0 : any;
    word0 = words[0].toString();
    //var word1 = words[1];

    let result: any
    //result = (firsword + ' ' + secondword);
    result = value.slice(0, 2);
    */

    //eliminar los elementos dupllicados
    let uniqueArray = value.filter(function (el, index, array) {

      return array.indexOf(el) == index;
    });

    return uniqueArray
  }
}
