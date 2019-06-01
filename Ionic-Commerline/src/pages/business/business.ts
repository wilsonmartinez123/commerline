import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { BusinessProductsPage } from '../business-products/business-products';



@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {

  business: any;


  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) {



    this.http.get('http://localhost/ionic-php-mysql/obtener_empresas.php').map(res => res.json()).subscribe(
      data => {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.business = data.empresa;

      },
      error => {
        console.log("Oops!", error);
      }

    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessPage');
  }

  ProductBusiness(companies) {
    this.navCtrl.push(BusinessProductsPage, companies)

  }

}
