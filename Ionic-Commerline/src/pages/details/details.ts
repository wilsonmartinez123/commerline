import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';



@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  business: any;

  item: {};

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) {
    this.item = this.navParams.get('product');

    //obtener informacion de la empresa, para mostrarlo junto con detalles del producto. 
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

}