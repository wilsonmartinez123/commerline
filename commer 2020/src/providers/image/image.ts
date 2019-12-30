import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ImageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImageProvider {


  /**
 * @name _READER
 * @type object
 * @private
 * @description              Creates a FileReader API object
 */
  private _READER: any = new FileReader();




  constructor(public http: HttpClient) {
    console.log('Hello ImageProvider Provider');
  }

  /**
   * @public
   * @method handleImageSelection
   * @param event  {any}     	The DOM event that we are capturing from the File input field
   * @description    			Uses the FileReader API to capture the input field event, retrieve
   *                 			the selected image and return that as a base64 data URL courtesy of
   *							an Observable
   * @return {Observable}
   */
  handleImageSelection(event: any): Observable<any> {
    let file: any = event.target.files[0];

    this._READER.readAsDataURL(file);
    return Observable.create((observer) => {
      this._READER.onloadend = () => {
        observer.next(this._READER.result);
        observer.complete();
      }
    });
  }

  /**
   * @public
   * @method isCorrectFile
   * @param file  {String}    The file type we want to check
   * @description    			Uses a regular expression to check that the supplied file format
   *                 			matches those specified within the method
   * @return {any}
   */
  isCorrectFileType(file) {
    return (/^(gif|jpg|jpeg|png)$/i).test(file);
  }

}
