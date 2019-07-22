import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions } from "@angular/http";
import { AccountPage } from '../account/account';
import { AdminPage } from '../admin/admin';
import { UsuarioPage } from '../usuario/usuario';


@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',

})
export class ChangePasswordPage {
  authForm: FormGroup;
  submitted = false;
  name: any;
  username: string;

  @ViewChild("currentPassword") currentPassword;
  @ViewChild("password") password;
  @ViewChild("passwordRetyped") passwordRetyped;
  correo: any;
  rol: any;
  admin: any;
  cliente: any;
  usuario: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public loading: LoadingController, public http: Http) {



    this.authForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      passwordRetyped: new FormControl('', [Validators.required]),
      currentPassword: new FormControl('', [Validators.required]),


    });
  }

  ngOnInit() {



    //obtiene el id_rol
    this.rol = this.navParams.get('id_rol');
    this.admin = this.navParams.get('id_administrador');

    //cliente o empresarios
    this.cliente = this.navParams.get('id_cliente');

    //usuario
    this.usuario = this.navParams.get('id_usuario');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }


  ChangePassword() {

    this.submitted = true;

    if (this.password.value !== this.passwordRetyped.value) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Las contraseñas no coinciden.',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    else {

      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json;charset=UTF-8');
      let options = new RequestOptions({ headers: headers });



      let data = {

        currentPassword: this.currentPassword.value,
        password: this.password.value,
        //name: this.name,
        admin: this.admin,
        cliente: this.cliente,
        usuario: this.usuario,
        rol: this.rol,



      };

      console.log(data);

      let loader = this.loading.create({

        content: 'Procesando por favor espere…',

      });

      loader.present().then(() => {

        this.http.post('http://localhost/ionic-php-mysql/Empresario/change-password.php', data, options)
          .map(res => res.json())
          .subscribe(res => {

            loader.dismiss()

            if (res == "su clave se cambio con exito") {

              let alert = this.alertCtrl.create({

                title: "HECHO",
                subTitle: (res),
                buttons: ['OK']

              });

              if (this.rol == 1) {

                alert.present();
                this.navCtrl.push(AdminPage);

              } else if (this.rol == 2) {

                alert.present();
                this.navCtrl.push(AccountPage);
              }

              else {

                alert.present();
                this.navCtrl.push(UsuarioPage);
              }
            }

            else {

              let alert = this.alertCtrl.create({

                title: "ERROR",
                subTitle: (res),
                buttons: ['OK']

              });

              alert.present();

            }

          });

      });
    }
  }
}


