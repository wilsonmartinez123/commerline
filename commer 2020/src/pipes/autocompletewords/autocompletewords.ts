import { Pipe, PipeTransform } from '@angular/core';
//import * as _ from 'lodash';



@Pipe({
  name: 'autocompletewords',
})
export class AutocompletewordsPipe implements PipeTransform {

  Array: Array<{ search: string }> = [];

  transform(value: any): string {
    if (!value) {
      return value;
    }
    //value = value.trim();

    let firsword = value.split(' ')[0];
    let secondword = value.split(' ')[1];
    //let sd = _.uniqBy(secondword, 'nombre_pro');
    //let result = firsword + secondword;

    //let result: any;
    let result = (firsword + secondword);
    //let result = firsword.toString + ' ' + secondword.toString;

    //result.replace(/\s/g, "");

    //let final: any;
    //final = this.Array.push({ search: result }).toString();

    //let names = value.split(" ");
    //let hp = names[(names.length - 2)]

    return result;



  }
}
