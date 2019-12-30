import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountPage } from '../account/account';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


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
  cliente: any;
  identification: any;
  oldNameValue: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loading: LoadingController,
    public ServiceProvider: AuthServiceProvider
  ) {


    let EMAILPATTERN = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";

    this.authForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(80)]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
      mobile: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]),


    });

  }

  ngOnInit() {

    this.name = this.navParams.get('nombre_cli');
    this.emails = this.navParams.get('correo_cli');
    this.phone = this.navParams.get('telefono_cli');
    this.identification = this.navParams.get('identificacion_cli');
    this.oldNameValue = this.navParams.get('nombre_cli');
    this.cliente = this.navParams.get('id_cliente');


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ActualizarDatosPage');
  }

  Update() {



    let data = {
      cliente: this.cliente,

      newName: this.username.value,
      newEmail: this.email.value,
      newPhone: this.mobile.value,
      identification: this.identification,
      name: this.oldNameValue

    };

    console.log(data);

    let loader = this.loading.create({
      content: 'Procesando por favor espera...',
    });

    loader.present().then(() => {


      this.ServiceProvider.UpdateCustomerData(data).subscribe((response) => {
        console.log(response);
        loader.dismiss();

        if (response == "Actualización de datos exitosa") {

          let alert = this.alertCtrl.create({
            title: "HECHO",
            subTitle: (response),
            buttons: ['ok']
          });

          alert.present();
          this.navCtrl.push(AccountPage);
        }

      }, (err) => {
        console.log(err);
        loader.dismiss();

        let alert = this.alertCtrl.create({
          title: "ERROR",
          subTitle: ("No se actulizaron los datos"),
          buttons: ['ok']
        });

        alert.present();

      });

    });

  }

}




