import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, MenuController, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { UserData } from '../../providers/user-data';
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
  @ViewChild("loginMode") loginMode;
  data: string;
  items: any;
  ngForm: any;
  email: any;

  showPass: boolean = false;
  type: string = 'password';
  isLoggedIn: any;
  login: boolean = false;



  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    private http: Http, public loading: LoadingController, public userData: UserData, public menuCtrl: MenuController, public toastCtrl: ToastController) {
 
  }


  ngOnInit() {

    this.isLoggedIn = localStorage.getItem('login');
    if(this.isLoggedIn !== null){
      this.login = true;
    }

    console.log(this.isLoggedIn);
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
              if (res == "empresario") {

                /*let alert = this.alertCtrl.create({
                  title: "Bienvenido",
                  subTitle: ("cliente"),
                  buttons: ['OK']
                }); */

                this.toastCtrl.create({
                  message: "Bienvenido: Cliente",
                  duration: 2000,
                  position: 'middle'
                }).present();

                //alert.present();

                this.userData.login(this.correo.value);
                //this.navCtrl.push(AccountPage);
                this.navCtrl.setRoot(AccountPage);


                this.correo.setValue('');
                this.password.setValue('');

                return;
              }

              else if (res == "administrador") {

                this.toastCtrl.create({
                  message: "Bienvenido: Administrador",
                  duration: 2000,
                  position: 'middle'
                }).present();

                this.userData.loginAdmin(this.correo.value);
                this.navCtrl.setRoot(AdminPage);

                this.correo.setValue('');
                this.password.setValue('');
              }

              else if (res == "usuario") {


                this.toastCtrl.create({
                  message: "Bienvenido: Usuario",
                  duration: 2000,
                  position: 'middle'
                }).present();

                this.userData.loginUser(this.correo.value);
                this.navCtrl.setRoot(UsuarioPage);

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

                this.password.setValue('');
              }

            });
        });
      }

  }

  ResetPassword() {
    this.navCtrl.push(ResetPasswordPage);
  }

  showPassword() {
    this.showPass = !this.showPass;
    if (this.showPass) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  logout() {

    localStorage.clear();

    this.userData.logout();
    this.navCtrl.setRoot('LoginPage');


  }

}
