import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';


@Pipe({
  name: 'unique',
})
export class UniquePipe implements PipeTransform {


  transform(value: any, term: string): any {


    if (value !== undefined && value !== null) {
      if (term) {
       // term.indexOf(value);
        return _.uniqBy(value, term);
      } else {
        return _.uniqBy(value, 'nombre_categoria');
      }
    }
    return value;
  }


}
