import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { Http, Headers } from '@angular/http';
import { UsuarioEditarDatosPage } from '../usuario-editar-datos/usuario-editar-datos';
import { ChangePasswordPage } from '../change-password/change-password';




@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {
  username: any;
  users: string;

  constructor(public navParams: NavParams, public userData: UserData, public nav: NavController, private http: Http) {
    //obtener empresarios

    this.http.get('http://localhost/ionic-php-mysql/Usuarios/obtener_usuarios.php').map(res => res.json()).subscribe(
      data => {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.users = data.usuarios;

      },
      error => {
        console.log("Oops!", error);
      }

    );

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
      //guardar variable global para que el usuario pueda calificar un producto
      localStorage.setItem('username', username);

      //variable global para detectar el inicio de sesion y deshabilitar la pagina de login
      localStorage.setItem('login', username);

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
