import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { ImageProvider } from '../../providers/image/image';
import { HomePage } from '../home/home';
import { Http, Headers, RequestOptions } from '@angular/http';
import * as moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-edit-product-ofert',
  templateUrl: 'edit-product-ofert.html',
})
export class EditProductOfertPage {
  //date: any;
  //date2: any;
  minDate: string;
  diasOferta: any;
  diasOferta2: any;

  @ViewChild("fechaInicioOferta") date;
  @ViewChild("fechaFinOferta") date2;
  @ViewChild("newPrice") newPrice;
  @ViewChild("newName") newName;
  @ViewChild("newDescription") newDescription;
  @ViewChild("precioOferta") precioOferta;



  // guarda la imagen el archivo en base64

  public newImage: string;

  // Se usa para activar / desactivar elementos DOM dependiendo de si se ha seleccionado una imagen

  public isSelected: boolean = false;

  //Almacena la imagen seleccionada Tipo 

  private _SUFFIX: string;


  id: any;
  name: any;
  image: any;
  price: any;
  priceAnterior: any;
  description: any;
  fechaInicio: any;
  fechaFin: any;
  namefile: any;
  imagen: any;
  empresa: any;
  diasdeOferta: number;
  diasofertas: any;
  secondsDiff: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private _IMAGES: ImageProvider, public alertCtrl: AlertController,
    private http: Http, public loading: LoadingController) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProductOfertPage');
  }

  ngOnInit() {

    this.id = this.navParams.get('id');
    this.imagen = this.navParams.get('imagen_pro');
    this.name = this.navParams.get('nombre_pro');
    this.image = this.navParams.get('imagen_pro');
    this.price = this.navParams.get('precioNuevo_pro');
    this.priceAnterior = this.navParams.get('precioAnterior_pro');
    this.description = this.navParams.get('desripcion_pro');
    this.fechaInicio = this.navParams.get('inicioOferta_pro');
    this.empresa = this.navParams.get('id_empresa');
    this.diasofertas = this.navParams.get('diasOferta_pro');



    this.fechaInicio = new Date(this.fechaInicio).toISOString();


    //console.log('1', this.fechaInicio);
    this.fechaFin = this.navParams.get('finOferta_pro');
    this.fechaFin = new Date(this.fechaFin).toISOString();

    //fijar el valor minimo que puede tomar fechaFin dependiendo de la fecha de inicio
    var fecha = this.fechaInicio.split('-');
    this.minDate = (fecha[0] + "-" + fecha[1] + "-" + fecha[2].slice(0, 2));
  }

  changedate() {

    //fijar el valor minimo que puede tomar fechaFin dependiendo de la fecha de inicio
    var fecha = this.fechaInicio.split('-');
    this.minDate = (fecha[0] + "-" + fecha[1] + "-" + fecha[2].slice(0, 2));

    var startDate = moment(this.fechaInicio)
    var endDate = moment(this.fechaFin)
    this.secondsDiff = endDate.diff(startDate, 'days') + 1;
    console.log(this.secondsDiff)
  }

  changeFinDate() {

    var startDate = moment(this.fechaInicio)
    var endDate = moment(this.fechaFin)
    this.secondsDiff = endDate.diff(startDate, 'days') + 1;
    console.log(this.secondsDiff)

  }


  selectFileToUpload(event: any): void {
    this._IMAGES
      .handleImageSelection(event)
      .subscribe((res) => {

        // Retrieve the file type from the base64 data URI string
        this._SUFFIX = res.split(':')[1].split('/')[1].split(";")[0];


        // Do we have correct file type?
        if (this._IMAGES.isCorrectFileType(this._SUFFIX)) {

          this.namefile = event.target.files[0].name;

          // Oculte el campo de entrada del archivo, muestre la imagen en la plantilla del componente
          // y mostrar un botón de carga
          this.isSelected = true
          this.newImage = res;
        }

        // If we don't alert the user
        else {
          this.displayAlert('Debe seleccionar un archivo de imagen con uno de los siguientes tipos: jpg, gif o png');
        }
      },
        (error) => {
          console.dir(error);
          this.displayAlert(error.message);
        });
  }



  edit() {


    if (this.newPrice.value * 1 <= this.precioOferta.value * 1) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'El precio de oferta del producto no puede ser mayor o igual al precio normal',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    else {

      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: headers });


      let data = {

        name: this.name,
        price: this.price,
        image: this.imagen,
        description: this.description,
        empresa: this.empresa,
        id: this.id,
        diasOfertas: this.diasofertas,

        newName: this.newName.value,
        newPrice: this.newPrice.value,
        newOfferprice: this.precioOferta.value,
        newDescription: this.newDescription.value,
        newFechainicio: this.fechaInicio,
        newFechafin: this.fechaFin,
        newDiasoferta: this.secondsDiff,
        newImage: this.newImage,
        namefile: this.namefile,

      };


      let loader = this.loading.create({
        content: 'Procesando por favor espera...',
      });

      loader.present().then(() => {
        this.http.post('http://localhost/ionic-php-mysql/edit_data.php', data, options)
          .map(res => res.json())
          .subscribe(res => {

            loader.dismiss();
            if (res == "actualización de datos exitosa") {
              let alert = this.alertCtrl.create({
                title: "HECHO",
                subTitle: (res),
                buttons: ['ok']
              });

              alert.present();


              this.navCtrl.push(HomePage);

            }
            else {
              let alert = this.alertCtrl.create({
                title: "ERROR",
                subTitle: (res),
                buttons: ['ok']
              });

              alert.present();
            }
          });
      });

    }





  }

  displayAlert(message: string): void {
    let alert: any = this.alertCtrl.create({
      title: 'Aviso!',
      subTitle: message,
      buttons: ['Got it']
    });
    alert.present();
  }

}
