import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';



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

  constructor(public navCtrl: NavController, public navParams: NavParams, public loading: LoadingController,
    public ServiceProvider: AuthServiceProvider) {

    this.empresa = this.navParams.get('id_empresa');
    this.nombre_empresa = this.navParams.get('nombre_emp');


    this.getProducts();
  }

  getProducts() {

    let loader = this.loading.create({
      content: 'Cargando productos…',
    });

    loader.present().then(() => {
      this.ServiceProvider.getProducts()
        .then(data => {
          this.posts = data['productos'].filter(item => item.id_empresa === this.empresa);
          loader.dismiss();
          this.initializeItems()
        });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessProductsPage');
  }

  public postDetail(product) {

    this.navCtrl.push(DetailsPage, { product: product });

    let json = JSON.stringify(product);
    localStorage.setItem('product', json);
  }

  CategorySelected(value: string) {


    this.selectedCategory = this.posts.filter(item => item.nombre_categoria === value);
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
