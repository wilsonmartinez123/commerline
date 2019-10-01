import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { BusinessProductsPage } from '../business-products/business-products';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';



@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {

  business: any;


  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public ServiceProvider: AuthServiceProvider) {

    this.getBusiness();

  }

  getBusiness() {
    this.ServiceProvider.getBusiness()
      .then(data => {
        this.business = data['empresa'];
      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessPage');
  }

  ProductBusiness(companies) {
    this.navCtrl.push(BusinessProductsPage, companies)

  }

}
