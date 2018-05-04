import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


   /**
    * @name items
    * @type {Array}
    * @public
    * @description     Used to store returned PHP data
    */
   public items : Array<any> = [];



   constructor(public navCtrl: NavController,
               public http   : HttpClient)
   {

   }

   /**
    * Triggered when template view is about to be entered
    * Returns and parses the PHP data through the load() method
    *
    * @public
    * @method ionViewWillEnter
    * @return {None}
    */
   ionViewWillEnter() : void
   {
      this.load();
   }

   /**
    * Retrieve the JSON encoded data from the remote server
    * Using Angular's Http class and an Observable - then
    * assign this to the items array for rendering to the HTML template
    *
    * @public
    * @method load
    * @return {None}
    */
   load() : void
   {
      this.http
      .get('http://localhost/ionic-php-mysql/retrieve-data.php')
      .subscribe((data : any) =>
      {
         console.dir(data);
         this.items = data;
      },
      (error : any) =>
      {
         console.dir(error);
      });
   }

   /**
    * Allow navigation to the AgregarProductoPage for creating a new entry
    *
    * @public
    * @method addEntry
    * @return {None}
    */
   addEntry() : void
   {
      this.navCtrl.push('AgregarProductoPage');
   }

   /**
    * Allow navigation to the AgregarProductoPage for amending an existing entry
    * (We supply the actual record to be amended, as this method's parameter,
    * to the AgregarProductoPage
    *
    * @public
    * @method viewEntry
    * @param param 		{any} 			Navigation data to send to the next page
    * @return {None}
    */
   viewEntry(param : any) : void
   {
      this.navCtrl.push('AgregarProductoPage', param);
   }


}