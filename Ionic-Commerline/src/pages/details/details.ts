import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

 
  item:{};
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.item = this.navParams.get('product');
 
     }
 
}