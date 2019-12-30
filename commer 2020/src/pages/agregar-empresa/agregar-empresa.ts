import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ImageProvider } from '../../providers/image/image';
import { Http } from '@angular/http';
import { AccountPage } from '../account/account';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
//import { AgregarProductoPage } from '../agregar-producto/agregar-producto';



@IonicPage()
@Component({
  selector: 'page-agregar-empresa',
  templateUrl: 'agregar-empresa.html',
})
export class AgregarEmpresaPage {

  private _SUFFIX: string;
  public image: string;
  public isSelected: boolean = false;

  value: number;
  membership: string;
  ubicacion: any;
  selectedMunicipality: any;
  public hideMe: boolean;
  status: boolean;
  id_cliente: any;


  static checkPhoneSize(control: FormControl) {
    const value: string = control.value;
    if (value && value.length > 7) {
      return {
        'phoneSize': true
      }
    }
    return null;
  }

  static checkCellPhoneSize(control: FormControl) {
    const value: string = control.value;
    if (value && value.length > 10) {
      return {
        'cellPhoneSize': true
      }
    }
    return null;
  }

  //////////////
  @ViewChild("name") name;
  @ViewChild("paginaWeb") paginaWeb;
  @ViewChild("direccion") direccion;
  @ViewChild("horario") horario;
  @ViewChild("numero_contacto") numero_contacto;
  @ViewChild("departamento") departamento;
  @ViewChild("municipio") municipio;


  form: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder,
    private _IMAGES: ImageProvider, public alertCtrl: AlertController, public http: Http, public loading: LoadingController,
    public ServiceProvider: AuthServiceProvider
  ) {


    this.getCities();


    this.form = fb.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      option: ["", Validators.required],
      name: ["", Validators.required],
      direction: ["", Validators.required],
      // phone: ["", Validators.required], //aqui estaba el hp problema ome
      link: [""],
      Horario: ["", Validators.required],
      image: ["", Validators.required],
      tipo_contacto: ['Telefono', [Validators.required]],
      numero_contacto: ["", [Validators.required, AgregarEmpresaPage.checkPhoneSize]],

    });

    this.form.get('option')
      .valueChanges
      .subscribe(value => {
        console.log(value);
        if (value === 'si') {
          const validators = [Validators.required, Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/), Validators.maxLength(50)];
          this.form.get('link').setValidators(validators);
        } else {
          const validators = [];
          this.form.get('link').setValidators(validators);
        }
        this.form.updateValueAndValidity();
      });



    this.form.get('tipo_contacto')
      .valueChanges
      .subscribe(value => {
        console.log(value);
        if (value === 'Telefono') {
          const validators = [Validators.required, AgregarEmpresaPage.checkPhoneSize];
          this.form.get('numero_contacto').setValidators(validators);
        } else {
          const validators = [Validators.required, AgregarEmpresaPage.checkCellPhoneSize];
          this.form.get('numero_contacto').setValidators(validators);
        }
        this.form.updateValueAndValidity();
      });
  }


  getCities() {
    this.ServiceProvider.getData()
      .subscribe(data => {
        this.ubicacion = data[5]['colombia'];
      }, err => {
        console.log(err);

      });
  }


  ngOnInit() {

    this.id_cliente = this.navParams.get('id_cliente');

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarEmpresaPage');
  }

  //seleccionar municipio de acuerdo al departamento seleccionado
  CountryChange(value: string) {

    this.selectedMunicipality = this.ubicacion.filter(item => item.departamento === value)

  }
  /*hide() {
    this.hideMe = true;
  }*/

  selectFileToUpload(event: any): void {
    this._IMAGES
      .handleImageSelection(event)
      .subscribe((res) => {

        // Retrieve the file type from the base64 data URI string
        this._SUFFIX = res.split(':')[1].split('/')[1].split(";")[0];


        // Do we have correct file type?
        if (this._IMAGES.isCorrectFileType(this._SUFFIX)) {

          // Hide the file input field, display the image in the component template
          // and display an upload button
          this.isSelected = true
          this.image = res;
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




  onSubmit() {


    let data = {

      name: this.name.value,
      image: this.image,
      paginaWeb: this.paginaWeb.value,
      numero_contacto: this.numero_contacto.value,
      direccion: this.direccion.value,
      horario: this.horario.value,
      departamento: this.departamento.value,
      municipio: this.municipio.value,
      id_cliente: this.id_cliente,

    };

    console.log(data);

    let loader = this.loading.create({

      content: 'Procesando por favor espere…',

    });

    loader.present().then(() => {


      this.ServiceProvider.addBusiness(data).subscribe((response) => {

        console.log(response);
        loader.dismiss()


        this.form.reset();

        let alert = this.alertCtrl.create({

          title: "HECHO",
          subTitle: ("registro exitoso"),
          buttons: ['OK']

        });

        alert.present();
        this.navCtrl.push(AccountPage);



      }, (err) => {

        console.log(err);
        loader.dismiss()
        let alert = this.alertCtrl.create({

          title: "ERROR",
          subTitle: ("No se registró la empresa"),
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
