import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, LoadingController, Content } from 'ionic-angular';
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
  //@ViewChild('inputMessage') inputMessageRef: ElementRef;
  @ViewChild('target') target: any;



  items: any;
  filter: any;
  showList: boolean = false;
  showProductsByUbication: boolean = false;
  ubication: boolean = false;
  showListUbication: boolean = false;
  hiddenList: boolean = false;

  searchTerm: any;
  ubicacion: any;
  filterUbication: any;
  ofertas: any;
  time: string;
  filterLocalities: any;
  searchFilter: any;
  showProductsByLocality: boolean = false;

  p: number = 1;





  constructor(public navCtrl: NavController, public navParams: NavParams,
    public ServiceProvider: AuthServiceProvider, public loading: LoadingController) {

    this.getProducts();


    //obtener ciudades
    this.getCities();

  }

  getCities() {
    this.ServiceProvider.getData()
      .subscribe(data => {
        this.ubicacion = data[5]['colombia'];
      }, err => {
        console.log(err);

      });
  }

  getProducts() {
    this.ServiceProvider.getData()
      .subscribe(data => {
        this.items = data[3]['productos'];
        this.ofertas = this.items.filter(item => item.diasOferta_pro !== '');
        this.initializeItems()
      }, err => {
        console.log(err);

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
    this.filterLocalities = this.items;
    this.p = 1;
  }

  SearchUbication(ev: any) {



    // Se reinician los valores
    this.initializeItems();

    // establece el valor del buscador
    let val = ev.target.value;

    // comprueba que no este vacio
    if (val && val.trim() != '' && val.length >= 2) {

      // muestra los resultados
      this.showListUbication = true;

      // muestra los productos de acuerdo a la localidad
      this.showProductsByLocality = true;


      this.filterUbication = this.filterUbication.filter((ubication) => {
        return (ubication.ciudades.some(el => el.replace(/\á/g, 'a').replace(/\é/g, 'e').replace(/\í/g, 'i').replace(/\ó/g, 'o').replace(/\ú/g, 'u').toLocaleLowerCase().indexOf(val.toLowerCase()) > -1));

      })
    }
    else {
      // oculta el resultado
      this.showListUbication = false;

      // oculta los productos de acuerdo a la localidad
      this.showProductsByLocality = false;
    }

  }




  filterLocality(municipio) {



    // Se reinician los valores
    this.initializeItems();


    // oculta el autocompletar
    this.showListUbication = false;

    //oculta las ofertas
    this.showProductsByUbication = true;


    this.searchFilter = municipio;


    let loader = this.loading.create({
      content: 'Buscando…',
    });

    loader.present().then(() => {
      this.filterLocalities = this.items.filter(item => item.municipio_empresa === municipio)

      //ir al elemento
      this.content.scrollTo(0, this.target.nativeElement.offsetTop, 500);
      loader.dismiss();
    });
    //this.content.scrollToBottom(1500);


  }

  CancelSearch(ev) {
    // oculta los resultados
    this.showProductsByLocality = false;

    //muestra las ofertas
    this.showProductsByUbication = true;

    // reestablece el campo
    ev.target.value = '';
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
