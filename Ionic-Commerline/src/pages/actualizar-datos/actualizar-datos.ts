import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestOptions, Headers, Http } from '@angular/http';
import { AccountPage } from '../account/account';


@IonicPage()
@Component({
  selector: 'page-actualizar-datos',
  templateUrl: 'actualizar-datos.html',
})
export class ActualizarDatosPage {



  @ViewChild("username") username;
  @ViewChild("email") email;
  @ViewChild("mobile") mobile;

  authForm: FormGroup;


  submitted = false;
  name: any;
  emails: any;
  phone: any;
  oldPhoneValue: any;
  oldEmailValue: any;
  oldNameValue: any;
  cliente: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loading: LoadingController,
    private http: Http,
  ) {


    let EMAILPATTERN = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";

    this.authForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(15)]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
      mobile: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]),


    });

  }

  ngOnInit() {

    this.name = this.navParams.get('nombre_cli');
    this.emails = this.navParams.get('correo_cli');
    this.phone = this.navParams.get('telefono_cli');

    this.cliente = this.navParams.get('id_cliente');


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ActualizarDatosPage');
  }

  Update() {




    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });


    let data = {
      cliente: this.cliente,

      newName: this.username.value,
      newEmail: this.email.value,
      newPhone: this.mobile.value,

    };

    console.log(data);

    let loader = this.loading.create({
      content: 'Procesando por favor espera...',
    });

    loader.present().then(() => {
      this.http.post('http://localhost/ionic-php-mysql/Empresario/actualizar_datos_empresario.php', data, options)
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
            this.navCtrl.push(AccountPage);
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




