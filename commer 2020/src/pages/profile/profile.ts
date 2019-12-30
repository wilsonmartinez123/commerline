import { Component } from '@angular/core';

import { AlertController, App, ModalController, NavController, ToastController, LoadingController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/filter';


import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DetailsPage } from '../details/details';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';



@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  items: any;
  posts: any;





  subcategory: {};
  products: any;
  p: number = 1;


  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public confData: ConferenceData,
    public user: UserData,
    public http: Http,
    public navParams: NavParams,
    public ServiceProvider: AuthServiceProvider,

  ) {

    //limpia variables globales
    localStorage.removeItem('product');
    //localStorage.clear();

    this.subcategory = this.navParams.get('subcategoria');
    console.log(this.subcategory);

    let loading = this.loadingCtrl.create({
      content: 'Cargando productos...',
    });

    loading.present().then(() => {

      this.ServiceProvider.getData()
        .subscribe(data => {

          this.posts = data[3]['productos'].filter(item => item.nombre_subcategoria === this.subcategory);
          this.initializeItems();
          loading.dismiss();

        },
          error => {
            console.log(error);
            loading.dismiss();
          });
    });
  }



  ionViewDidLoad() {


  }

  public postDetail(product) {
    this.navCtrl.push(DetailsPage, { product: product });

    let json = JSON.stringify(product);
    localStorage.setItem('product', json);
  }

  initializeItems() {
    this.items = this.posts;
    this.p = 1;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((product) => {
        return (product.nombre_pro.replace(/\á/g, 'a').replace(/\é/g, 'e').replace(/\í/g, 'i').replace(/\ó/g, 'o').replace(/\ú/g, 'u').toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }





}