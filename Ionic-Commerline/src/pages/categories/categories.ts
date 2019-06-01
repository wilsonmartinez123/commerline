import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http , Headers} from '@angular/http';
import { ProfilePage } from '../profile/profile';




@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {



  categories: any;


  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) {



    this.http.get('http://localhost/ionic-php-mysql/obtener_categorias.php').map(res => res.json()).subscribe(
      data => {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.categories = data.categorias;
        //this.categories = Array.of(this.categories);

      },
      error => {
        console.log("Oops!", error);
      }

    );
  }



  //dataSource = Observable.of(this.categories); //this is just for example, the actual data source should be an http call or some service layer subject that you can actually update / trigger    
  //uniqueData$ = this.dataSource.map(data => _.uniqBy(this.categories, 'name'));



  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  public viewCategory(category) {
    this.navCtrl.push(ProfilePage, category);

  }



}

