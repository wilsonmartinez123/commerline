import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestOptions, Headers, Http } from '@angular/http';
import { UsuarioPage } from '../usuario/usuario';



@IonicPage()
@Component({
  selector: 'page-usuario-editar-datos',
  templateUrl: 'usuario-editar-datos.html',
})
export class UsuarioEditarDatosPage {



  @ViewChild("username") username;
  @ViewChild("email") email;
  @ViewChild("mobile") mobile;

  authForm: FormGroup;


  submitted = false;
  name: any;
  emails: any;
  usuario: any;
  phone: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loading: LoadingController,
    private http: Http,
  ) {


    let EMAILPATTERN = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";

    this.authForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
      mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),



    });

  }

  ngOnInit() {

    this.name = this.navParams.get('nombre_usu');
    this.emails = this.navParams.get('correo_usu');
    this.usuario = this.navParams.get('id_usuario');
    this.phone = this.navParams.get('telefono_usu');



  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminEditPage');
  }

  Update() {




    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });


    let data = {

      usuario: this.usuario,
      newName: this.username.value,
      newEmail: this.email.value,
      newPhone: this.mobile.value,

    };

    console.log(data);

    let loader = this.loading.create({
      content: 'Procesando por favor espera...',
    });

    loader.present().then(() => {
      this.http.post('http://localhost/ionic-php-mysql/Usuarios/actualizar_datos_usuario.php', data, options)
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
            this.navCtrl.push(UsuarioPage);
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