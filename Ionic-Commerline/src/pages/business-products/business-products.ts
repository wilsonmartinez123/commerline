import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { DetailsPage } from '../details/details';



@IonicPage()
@Component({
  selector: 'page-business-products',
  templateUrl: 'business-products.html',
})
export class BusinessProductsPage {
  empresa: any;
  posts: any;
  nombre_empresa: any;
  selectedCategory: any;
  items: any;
  selectedCategories: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loading: LoadingController, private http: Http) {

    this.empresa = this.navParams.get('id_empresa');
    this.nombre_empresa = this.navParams.get('nombre_emp');


    let loader = this.loading.create({
      content: 'Cargando productos…',
    });

    loader.present().then(() => {
      this.http.get('http://localhost/ionic-php-mysql/obtener_productos.php').map(res => res.json()).subscribe(
        data => {

          let headers = new Headers();
          headers.append('Content-Type', 'application/json');

          this.posts = data.productos.filter(item => item.id_empresa === this.empresa);
          loader.dismiss();
          this.initializeItems()
        },
        error => {
          console.log("Oops!", error);
        }

      );
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessProductsPage');
  }

  public postDetail(product) {
    this.navCtrl.push(DetailsPage, { product: product });

  }

  CategorySelected(value: string) {


    this.selectedCategory = this.posts.filter(item => item.categoria_pro === value);
    this.initializeCategories()
  }


  initializeItems() {
    this.items = this.posts;

  }

  initializeCategories() {
    this.selectedCategories = this.selectedCategory;

  }

  onInput(ev: any) {


    // Se reinician los valores
    this.initializeItems();
    this.initializeCategories();


    // establece el valor del buscador
    let val = ev.target.value;

    // comprueba que no este vacio
    if (val && val.trim() != '' && val.length > 1 && this.items) {

      this.items = this.items.filter((product) => {
        return (product.nombre_pro.replace(/\á/g, 'a').replace(/\é/g, 'e').replace(/\í/g, 'i').replace(/\ó/g, 'o').replace(/\ú/g, 'u').toLowerCase().indexOf(val.toLowerCase()) > -1);


      })


    }

    if (val && val.trim() != '' && val.length > 1 && this.selectedCategories) {

      this.selectedCategories = this.selectedCategories.filter((product) => {
        return (product.nombre_pro.replace(/\á/g, 'a').replace(/\é/g, 'e').replace(/\í/g, 'i').replace(/\ó/g, 'o').replace(/\ú/g, 'u').toLowerCase().indexOf(val.toLowerCase()) > -1);


      })


    }


  }

  onCancel(ev) {
    // reestablece el campo
    ev.target.value = '';
  }


}
