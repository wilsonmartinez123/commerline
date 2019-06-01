import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { DetailsPage } from '../details/details';
import { SupportPage } from '../support/support';



@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})

export class OffersPage {

  @ViewChild(Slides) slides: Slides;

  items: any;
  filter: any;
  showList: boolean = false;
  ubication: boolean = false;
  showList2: boolean = false;
  showListUbication: boolean = false;
  searchTerm: any;
  ubicacion: any;
  filterUbication: any;
  ofertas: any;

  //slides para publicidad

  /*slideOpts = {
    initialSlide: 1,
    speed: 400
  };
*/


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    this.http.get('http://localhost/ionic-php-mysql/obtener_productos.php').map(res => res.json()).subscribe(
      data => {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.items = data.productos;
        this.ofertas = this.items.filter(item => item.diasOferta_pro !== '');
        this.initializeItems()

      },
      error => {
        console.log("Oops!", error);
      }

    );


    this.http.get('http://localhost/ionic-php-mysql/colombia.json').map(res => res.json()).subscribe(
      data => {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.ubicacion = data.colombia;
        this.initializeItems()

      },
      error => {
        console.log("Oops!", error);
      }

    );

  }

  slideChanged() {
    this.slides.getActiveIndex();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');
  }

  initializeItems() {
    this.filter = this.items;
    this.filterUbication = this.ubicacion
  }

  SearchUbication(ev: any) {

    // muestra los resultados
    this.showListUbication = true;

    // Se reinician los valores
    this.initializeItems();

    // establece el valor del buscador
    let val = ev.target.value;

    // comprueba que no este vacio
    if (val && val.trim() != '' && val.length > 1) {


      this.filterUbication = this.filterUbication.filter((ubication) => {
        return (ubication.ciudades.some(el => el.replace(/\á/g, 'a').replace(/\é/g, 'e').replace(/\í/g, 'i').replace(/\ó/g, 'o').replace(/\ú/g, 'u').toLocaleLowerCase().indexOf(val.toLowerCase()) > -1));



      })
    }
    else {
      // oculta el resultado
      this.showListUbication = false;

    }

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

  contact() {

    this.navCtrl.push(SupportPage);
  }

  selectUbication() {
    this.ubication = true;
  }


}
