import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ProfilePage } from '../profile/profile';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';




@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {



  categories: any;
  showLevel1 = null;


  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public ServiceProvider: AuthServiceProvider) {

    this.getCategories();

  }



  getCategories() {
    this.ServiceProvider.getData()
      .subscribe(data => {
        this.categories = data[8]['categorias'];

      }, err => {
        console.log(err);

      });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  public viewCategory(subs) {
    this.navCtrl.push(ProfilePage, subs);

  }

  isLevel1Shown(idx) {
    return this.showLevel1 === idx;
  };

  categoria(idx) {
    if (this.isLevel1Shown(idx)) {
      this.showLevel1 = null;
    } else {
      this.showLevel1 = idx;
    }
  };



}

