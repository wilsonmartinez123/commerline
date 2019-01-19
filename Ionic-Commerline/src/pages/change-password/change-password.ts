import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions } from "@angular/http";
import { AccountPage } from '../account/account';
/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  @ViewChild("password") password;
  @ViewChild("passwordRetyped") passwordRetyped;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public loading: LoadingController, public http: Http) {

     

    this.authForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      passwordRetyped: new FormControl('', [Validators.required]),


    });
  }

  ngOnInit() {

    this.name = this.navParams.get('correo_usu');

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

        password: this.password.value,
        name: this.name,


      };

      let loader = this.loading.create({

        content: 'Procesando por favor espere…',

      });

      loader.present().then(() => {

        this.http.post('http://localhost/ionic-php-mysql/change-password.php', data, options)
          .map(res => res.json())
          .subscribe(res => {

            loader.dismiss()

            if (res == "su clave se cambio con exito") {

              let alert = this.alertCtrl.create({

                title: "HECHO",
                subTitle: (res),
                buttons: ['OK']

              });

              alert.present();
              this.navCtrl.push(AccountPage);
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


