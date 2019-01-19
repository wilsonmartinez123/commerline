
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
//import { AngularFireAuth } from 'angularfire2/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { Http } from "@angular/http";

/**
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  @ViewChild("email") email;
  myForm: FormGroup;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public loading: LoadingController, private http: Http) {

    let EMAILPATTERN = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";

    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpasswordPage');
  }

  resetPassword() {

    let data = {

      email: this.email.value
    };

    let loader = this.loading.create({
      content: 'Procesando por favor espera...',
    });

    loader.present().then(() => {
      this.http.post('http://localhost/ionic-php-mysql/reset-password.php', data)
        .map(res => res.json())
        .subscribe(res => {

          loader.dismiss()

          if (res == "mensaje enviado"){

            let alert = this.alertCtrl.create({
              title: "Tu contraseña ha sido enviada a tu correo",
              subTitle: (res),
              buttons: ['OK']
            });

            alert.present();
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
