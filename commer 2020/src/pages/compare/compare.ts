import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DetailsPage } from '../details/details';

export interface Config {
  productos: string;
}

@IonicPage()
@Component({
  selector: 'page-compare',
  templateUrl: 'compare.html',
})
export class ComparePage {

  //Defines an object allowing the interface properties to be accessed
  public config: Config;


  //Defines an object for storing the column definitions of the datatable

  public columns: any;

  //Defines an object for storing returned data to be displayed in the template

  public rows: any;




  users: any;
  item: any;

  scrollBarHorizontal = (window.innerWidth < 1200);

  constructor(public loading: LoadingController, public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public ServiceProvider: AuthServiceProvider) {



    this.item = this.navParams.get('nombre_pro');

    window.onresize = () => {
      this.scrollBarHorizontal = (window.innerWidth < 1200);
    };

  }



  ionViewDidLoad(): void {

    //let result = firsword.toString + ' ' + secondword.toString;

    let words = this.item.split(' ')[0] + ' ' + this.item.split(' ')[1] + ' ' + this.item.split(' ')[2];
    console.log(words);


    let loader = this.loading.create({
      content: 'Comparando…',
    });

    loader.present().then(() => {

      this.ServiceProvider.getData()
        .subscribe(data => {
          this.rows = data[3]['productos'].filter(item => item.nombre_pro.indexOf(words) !== -1);
          loader.dismiss();

        }, err => {
          console.log(err);
          loader.dismiss();

        });

    });


  }

  postDetail(product) {
    this.navCtrl.push(DetailsPage, { product: product });

    let json = JSON.stringify(product);
    localStorage.setItem('product', json);
  }


}
