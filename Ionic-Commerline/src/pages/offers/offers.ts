import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { DetailsPage } from '../details/details';



@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {

  items: any;
  filter: any;
  showList: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    this.http.get('http://localhost/ionic-php-mysql/obtener_productos.php').map(res => res.json()).subscribe(
      data => {

        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        this.items = data.productos;
        this.initializeItems()

      },
      error => {
        console.log("Oops!", error);
      }

    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');
  }

  initializeItems() {
    this.filter = this.items;

  }

  onInput(ev: any) {

    // muestra los resultados
    this.showList = true;

    // Se reinician los valores
    this.initializeItems();

    // establece el valor del buscador
    let val = ev.target.value;

    // comprueba que no este vacio
    if (val && val.trim() != '' && val.length > 1) {

      this.filter = this.filter.filter((product) => {
        return (product.nombre_pro.replace(/\á/g, 'a').replace(/\é/g, 'e').replace(/\í/g, 'i').replace(/\ó/g, 'o').replace(/\ú/g, 'u').toLowerCase().indexOf(val.toLowerCase()) > -1);


      })


    }
    else {
      // oculta el resultado
      this.showList = false;

    }


  }

  onCancel(ev) {
    // oculta los resultados
    this.showList = false;

    // reestablece el campo
    ev.target.value = '';
  }

  public postDetail(product) {
    this.navCtrl.push(DetailsPage, { product: product });

  }
}
