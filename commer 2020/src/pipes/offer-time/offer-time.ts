import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/**
 * Generated class for the OfferTimePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'offerTime',
})
export class OfferTimePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(date1: any) {

    var before = moment(date1);
    var now = moment();

    var days = before.diff(now, 'days') + 1;
    var hours = before.diff(now, 'hours');
    var minutes = before.diff(now, 'minutes');

    if (days > 0) {

      return (days +' Dias ' + hours + ' Horas ' + minutes + ' Minutos ');
    }
  }
}
