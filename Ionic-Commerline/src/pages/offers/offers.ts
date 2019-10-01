import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Content } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { DetailsPage } from '../details/details';
import { SupportPage } from '../support/support';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';





@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})

export class OffersPage {

  @ViewChild(Slides) slides: Slides;
  @ViewChild(Content) content: Content;



  items: any;
  filter: any;
  showList: boolean = false;
  ubication: boolean = false;
  showListUbication: boolean = false;
  hiddenList: boolean = false;

  searchTerm: any;
  ubicacion: any;
  filterUbication: any;
  ofertas: any;
  time: string;
  filterLocalities: any;




  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
    public ServiceProvider: AuthServiceProvider) {

    this.getProducts();


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

  getProducts() {
    this.ServiceProvider.getProducts()
      .then(data => {
        this.items = data['productos'];
        this.ofertas = this.items.filter(item => item.diasOferta_pro !== '');
        this.initializeItems()
      });
  }

  ngOnInit() {

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

  filterLocality(municipio) {

    //this.hiddenList = true;

    this.filterLocalities = this.items.filter(item => item.municipio_empresa === municipio)


  }
  scrollTo(municipio) {
    this.filterLocalities = this.items.filter(item => item.municipio_empresa === municipio)
    let y = document.getElementById(municipio).offsetTop;
    this.content.scrollTo(0, y);
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

  postDetail(product) {
    this.navCtrl.push(DetailsPage, { product: product });

    let json = JSON.stringify(product);
    localStorage.setItem('product', json);

    console.log(localStorage.setItem('product', json));

    //envia id del producto para verificar si el usuario ya califico un producto
    let id = JSON.stringify(product.id);
    localStorage.setItem('id', id);

  }


  contact() {

    this.navCtrl.push(SupportPage);
  }

  selectUbication() {
    this.ubication = true;
  }


}
