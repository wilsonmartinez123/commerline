import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
  p: number = 1;


  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public ServiceProvider: AuthServiceProvider,
    public loading: LoadingController) {



  }
  ngOnInit() {
    this.getBusiness();
  }

  getBusiness() {

    let loader = this.loading.create({
      content: 'Procesando por favor espera...',
    });

    loader.present().then(() => {

      this.ServiceProvider.getData()
        .subscribe(data => {
          this.business = data[0]['empresa'];
          console.log(this.business);
          loader.dismiss();

        }, err => {
          console.log(err);
          loader.dismiss();
        });
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessPage');
  }

  ProductBusiness(companies) {
    this.navCtrl.push(BusinessProductsPage, companies)

  }

}
