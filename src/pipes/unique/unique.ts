import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 
/**
 * Generated class for the UniquePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'unique',
})
export class UniquePipe implements PipeTransform {


  transform(value: any): any{
    if(value!== undefined && value!== null){
        return _.uniqBy(value, 'categoria_pro');
    }
    return value;
}

  
}
