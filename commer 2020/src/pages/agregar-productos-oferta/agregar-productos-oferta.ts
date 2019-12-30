import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Http } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { ImageProvider } from '../../providers/image/image';
import * as moment from 'moment';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';




@Component({
  selector: 'page-agregar-productos-oferta',
  templateUrl: 'agregar-productos-oferta.html',
})
export class AgregarProductosOfertaPage {

  public form: FormGroup;


  //Will store the selected image file data (in the form of a base64 data URI)

  public image: string;


  //Will store the selected image's MimeType

  private _SUFFIX: string;


  @ViewChild("name") name;
  @ViewChild("price") price;
  @ViewChild("description") description;
  @ViewChild("fechaFinOferta") fechaFinOferta;


  productos: any;
  id_cliente: any;
  posts: any;
  items: any;
  minDate: any;
  date: any;
  date2: any;
  item: any;
  secondsDiff: any;
  categories: any;



  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toast: ToastController,
    public alertCtrl: AlertController, public loading: LoadingController, public fb: FormBuilder, private _IMAGES: ImageProvider,
    public ServiceProvider: AuthServiceProvider

  ) {

    this.id_cliente = JSON.parse(localStorage.getItem('id_cliente'));

    this.getBusiness();
    this.getAllCategories();


  }


  getBusiness() {
    this.ServiceProvider.getData()
      .subscribe(data => {
        this.posts = data[0]['empresa'].filter(item => item.id_cliente === this.id_cliente);
        this.initializeItems();

      }, err => {
        console.log(err);

      });
  }


  getAllCategories() {
    this.ServiceProvider.getData()
      .subscribe(data => {
        this.categories = data[4]['categorias'];

      }, err => {
        console.log(err);

      });
  }


  ngOnInit() {

    this.item = JSON.parse(localStorage.getItem('id_empresa'));


    this.form = this.fb.group({
      fechaInicioOferta: ["", Validators.required],
      fechaFinOferta: ["", [Validators.required]],
      diasOferta: [""],

      productos: this.initProductoFields()
    });

  }

  initializeItems() {
    this.items = this.posts;
  }


  initProductoFields(): FormArray {
    this.productos = this.fb.array([
      this.buildGroup()
    ]);


    return this.productos;

  }



  buildGroup(): FormGroup {
    return this.fb.group({

      selectedSubcategory: [""],
      name: ["", Validators.required],
      namefile: [""],
      typefile: [""],
      image: [""],
      price: ["", [Validators.required, Validators.pattern("[0-9]*")]],
      description: ["", Validators.required],
      categoria: ["", Validators.required],
      subcategoria: ["", Validators.required],
      IdEmpresario: [""],
      precioOferta: ["", [Validators.required, Validators.pattern("[0-9]*")]],
      picture: ["", Validators.required],



    }
      , { validator: this.customValidators }
    );

  }


  customValidators(group: FormGroup) {

    var normalprice = group.controls['price'];
    var offerprice = group.controls['precioOferta'];

    if (offerprice.value * 1 < normalprice.value * 1) {

      return null;
    }

    return { 'priceOutOfRange': true };

  }


  changedate() {
    var fecha = this.date.split('-');
    this.minDate = (fecha[0] + "-" + fecha[1] + "-" + fecha[2].slice(0, 2));
    console.log(this.minDate);
  }

  changeFinDate() {
    /*var fechaFin = this.date2.split('-');
    this.diasOferta = (fechaFin[2].slice(0, 2));
    var fechaInicio = this.date.split('-');
    this.diasOferta2 = (fechaInicio[2].slice(0, 2));
    this.form.controls['diasOferta'].setValue((this.diasOferta - this.diasOferta2) + 1);
    */

    var startDate = moment(this.date)
    var endDate = moment(this.date2)
    this.secondsDiff = endDate.diff(startDate, 'days') + 1;
    this.form.controls['diasOferta'].setValue(this.secondsDiff);
  }


  addNewInputField() {
    this.productos.push(this.buildGroup());

  }

  removeInputField(i: number): void {
    this.productos.removeAt(i);
  }



  selectFileToUpload(event, index): void {

    this.productos.controls[index].controls['IdEmpresario'].value = this.id_cliente;
    this.productos.controls[index].controls['namefile'].value = event.target.files[0].name;
    this.productos.controls[index].controls['typefile'].value = event.target.files[0].type;



    this._IMAGES
      .handleImageSelection(event)
      .subscribe((res) => {

        // Retrieve the file type from the base64 data URI string
        this._SUFFIX = res.split(':')[1].split('/')[1].split(";")[0];



        // Verifica si el tipo de archivo es el correcto?
        if (this._IMAGES.isCorrectFileType(this._SUFFIX)) {

          //Muestra la Imagen

          this.productos.controls[index].image = res;
          this.productos.controls[index].controls['picture'].value = res;


        }


        // If we don't alert the user
        else {
          this.displayAlert('Debe seleccionar un archivo de imagen con uno de los siguientes tipos: jpg, gif o png');
        }

        if (this.productos.controls[index].value['picture'].includes('fakepath')) {
          this.productos.controls[index].value['picture'] = res;
          this.productos.controls[index].value['IdEmpresario'] = this.id_cliente;
          this.productos.controls[index].value['namefile'] = event.target.files[0].name;
          this.productos.controls[index].value['typefile'] = event.target.files[0].type;
        }

      },
        (error) => {
          console.dir(error);
          this.displayAlert(error.message);
        });



  }


  subcategories(categoria, index: number) {

    this.productos.controls[index].selectedSubcategory = this.categories.filter(item => item.categoria === categoria)

  }

  submitForm(): void {


    /*
        let resources = JSON.stringify(this.form.value);
        console.log(resources);
    */


    let loader = this.loading.create({

      content: 'Procesando por favor espere…',

    });

    loader.present().then(() => {


      this.ServiceProvider.addProduct(this.form.value).subscribe((result) => {

        console.log(result);
        loader.dismiss();


        let alert = this.alertCtrl.create({

          title: "HECHO",
          subTitle: ("registro exitoso"),
          buttons: ['OK']

        });

        alert.present();

        let empresa = JSON.stringify(this.item.id_empresa);
        localStorage.setItem('id_empresa', empresa);

        this.navCtrl.push(HomePage, { item: this.item });


      }, (err) => {
        console.log(err);
        loader.dismiss();
        let alert = this.alertCtrl.create({

          title: "ERROR",
          subTitle: ("No se registró el producto"),
          buttons: ['OK']

        });

        alert.present();
      });






    });



  }


  displayAlert(message: string): void {
    let alert: any = this.alertCtrl.create({
      title: 'Heads up!',
      subTitle: message,
      buttons: ['Got it']
    });
    alert.present();
  }

}

