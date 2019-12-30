import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, MenuController, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { UserData } from '../../providers/user-data';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { AccountPage } from '../account/account';
import { AdminPage } from '../admin/admin';
import { UsuarioPage } from '../usuario/usuario';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


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
  responseData: any;


  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    public loading: LoadingController, public userData: UserData, public menuCtrl: MenuController, public toastCtrl: ToastController,
    public ServiceProvider: AuthServiceProvider) {

  }


  ngOnInit() {

    this.isLoggedIn = localStorage.getItem('login');
    if (this.isLoggedIn !== null) {
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

        /*
                var headers = new HttpHeaders();
                headers.append("Accept", 'application/json');
                headers.append('Content-Type', 'application/json;charset=UTF-8');
                headers.append('Access-Control-Allow-Origin', '*');
                //let options = new RequestOptions({ headers: headers });
                */

        let data = {
          correo: this.correo.value,
          password: this.password.value
        };



        let loader = this.loading.create({
          content: 'Procesando por favor espera...',
        });

        loader.present().then(() => {


          this.ServiceProvider.login(data).subscribe((response) => {
            console.log(response);
            loader.dismiss();


            /*
this.http.post('http://localhost/ionic-php-mysql/login.php', data, { headers: headers })
  .subscribe(res => {
    console.log(res);
    loader.dismiss();
*/



            if (response == "empresario") {



              this.toastCtrl.create({
                message: "Bienvenido: Cliente",
                duration: 2000,
                position: 'middle'
              }).present();



              this.userData.login(this.correo.value);
              //this.navCtrl.push(AccountPage);
              this.navCtrl.setRoot(AccountPage);


              this.correo.setValue('');
              this.password.setValue('');

              return;
            }

            else if (response == "administrador") {

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

            else if (response == "usuario") {


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

            else if (response == "verifica correo") {

              let alert = this.alertCtrl.create({
                title: "ALERTA",
                subTitle: "Aun no has confirmado correo electrónico, por favor ingresa a tu correo. ",
                buttons: ['OK']
              });

              alert.present();

            }

            else if (response == "datos erroneos") {

              let alert = this.alertCtrl.create({
                title: "ALERTA",
                subTitle: "Tu correo o contraseña son incorrectos, verifica",
                buttons: ['OK']
              });

              alert.present();

            }

          },

            (err) => {
              console.log(err);
              loader.dismiss()


              let alert = this.alertCtrl.create({
                title: "ERROR",
                subTitle: "Algo salió mal",
                buttons: ['OK']
              });

              alert.present();


              this.password.setValue('');


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
