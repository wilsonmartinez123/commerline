import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ReplacePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'replace',
})
export class ReplacePipe implements PipeTransform {
  posts: any;
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any, term: string): any {


    if (items && items.length)
      if (term) {
        return items.filter(it => it[term] = it[term].replace(/\D/g,'').replace(/\./g, ''));
      }
      else {
        return items.replace(/\,/g, '.');
      }
    return items;
  }
}

