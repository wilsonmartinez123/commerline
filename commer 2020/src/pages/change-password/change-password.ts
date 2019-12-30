import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountPage } from '../account/account';
import { AdminPage } from '../admin/admin';
import { UsuarioPage } from '../usuario/usuario';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


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
    public loading: LoadingController, public ServiceProvider: AuthServiceProvider) {



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


        this.ServiceProvider.changePassword(data).subscribe((response) => {
          console.log(response);
          loader.dismiss();

          if (response == "Su clave se cambio con exito") {

            let alert = this.alertCtrl.create({

              title: "HECHO",
              subTitle: (response),
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

          else if (response == "La contraseña actual es incorrecta!!") {

            let alert = this.alertCtrl.create({

              title: "Error",
              subTitle: (response),
              buttons: ['OK']

            });
            alert.present();
          }


        }, (err) => {
          console.log(err);
          loader.dismiss()


          let alert = this.alertCtrl.create({

            title: "ERROR",
            subTitle: ("No se pudo cambiar su contraseña"),
            buttons: ['OK']

          });

          alert.present();

        });

      });
    }
  }
}


