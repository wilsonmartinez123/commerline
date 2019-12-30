import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { UsuarioEditarDatosPage } from '../usuario-editar-datos/usuario-editar-datos';
import { ChangePasswordPage } from '../change-password/change-password';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';





@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {
  username: any;
  users: string;

  constructor(public navParams: NavParams, public userData: UserData, public nav: NavController,
    public storage: Storage, public ServiceProvider: AuthServiceProvider) {
    //obtener empresarios

    this.getUsers();

  }

  getUsers() {
    this.ServiceProvider.getData()
      .subscribe(data => {
        this.users = data[6]['usuarios'];
        console.log(this.users);
      }, err => {
        console.log(err);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  ngAfterViewInit() {
    this.getUsername();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;

      if (username == null) {
        this.storage.remove('username');
      }
      else {

        //guardar variable global para que el usuario pueda calificar un producto
        localStorage.setItem('username', username);

        //variable global para detectar el inicio de sesion y deshabilitar la pagina de login
        localStorage.setItem('login', username);


        console.log(username);
      }
    });
  }

  updateDate(item) {
    this.nav.push(UsuarioEditarDatosPage, item)
  }

  changePassword(item) {

    this.nav.push(ChangePasswordPage, item)
  }

  logout() {

    this.userData.logout();
    this.nav.setRoot('LoginPage');

    //si sale del sistema, la variable global se establece como null;
    localStorage.clear();
    //localStorage.removeItem('username');


  }

}
