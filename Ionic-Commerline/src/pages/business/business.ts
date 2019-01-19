import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the BusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

        let headers = new HttpHeaders();
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

}
