import { Component, ViewChild } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { NavController, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
//import { AccountPage } from '../account/account';
import { UserData } from '../../providers/user-data';
//import { UserOptions } from '../../interfaces/user-options';
//import { TabsPage } from '../tabs-page/tabs-page';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { AccountPage } from '../account/account';
import { AdminPage } from '../admin/admin';
import { UsuarioPage } from '../usuario/usuario';

@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {


  @ViewChild("correo") correo;
  @ViewChild("password") password;
  data: string;
  items: any;
  ngForm: any;



  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    private http: Http, public loading: LoadingController, public userData: UserData) {
  }


  signUp() {
    this.navCtrl.push(SignupPage);
  }

  signIn() {
    //form: NgForm
    //// check to confirm the username and password fields are filled

    if (this.correo.value == "") {

      let alert = this.alertCtrl.create({

        title: "Atención",
        subTitle: "Campo correo está vacio",
        buttons: ['OK']
      });

      alert.present();
    } else

      if (this.password.value == "") {

        let alert = this.alertCtrl.create({

          title: "Atención",
          subTitle: "Campo contraseña está vacio",
          buttons: ['OK']
        });

        alert.present();

      }
      else {

        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });


        let data = {
          correo: this.correo.value,
          password: this.password.value
        };



        let loader = this.loading.create({
          content: 'Procesando por favor espera...',
        });

        loader.present().then(() => {


          this.http.post('http://localhost/ionic-php-mysql/login.php', data, options)
            .map(res => res.json())
            .subscribe(res => {
              console.log(res)
              loader.dismiss()
              //if(res=="registro exitoso"){

              //  if (res > 0) {

              /*localStorage.setItem('response', JSON.stringify(res));
              console.log(JSON.parse(localStorage.getItem('response')));*/
              //
              if (res == 2) {


                let alert = this.alertCtrl.create({
                  title: "Bienvenido",
                  subTitle: ("cliente"),
                  buttons: ['OK']
                });

                alert.present();

                this.userData.login(this.correo.value);
                this.navCtrl.push(AccountPage);


                this.correo.setValue('');
                this.password.setValue('');

                return;
              }

              else if (res == 1) {

           let alert = this.alertCtrl.create({
                  title: "Bienvenido",
                  //subTitle: (res),
                  subTitle: ("Administrador"),
                  buttons: ['OK']
                });

                alert.present();

                this.userData.loginAdmin(this.correo.value);
                this.navCtrl.push(AdminPage);

                this.correo.setValue('');
                this.password.setValue('');
              }

              else if(res == "usuario"){

                
                let alert = this.alertCtrl.create({
                  title: "Bienvenido",
                  //subTitle: (res),
                  subTitle: ("Usuario"),
                  buttons: ['OK']
                });

                alert.present();

                this.userData.loginUser(this.correo.value);
                this.navCtrl.push(UsuarioPage);

                this.correo.setValue('');
                this.password.setValue('');

              }
              //  }
              else {
                let alert = this.alertCtrl.create({
                  title: "ERROR",
                  subTitle: "Tu correo o contraseña son incorrectos, verifica",
                  buttons: ['OK']
                });

                alert.present();
              }

            });
        });
      }

  }

  ResetPassword() {
    this.navCtrl.push(ResetPasswordPage);
  }

}
