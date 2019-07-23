import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { Http, Headers } from '@angular/http';
import { AdminClientesPage } from '../admin-clientes/admin-clientes';
import { AdminEmpresasPage } from '../admin-empresas/admin-empresas';
import { AdminEditPage } from '../admin-edit/admin-edit';
import { ChangePasswordPage } from '../change-password/change-password';


@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  username: string;
  users: any;

  constructor(public navParams: NavParams, public userData: UserData, public nav: NavController, private http: Http) {
    //obtener empresarios

    this.http.get('http://localhost/ionic-php-mysql/Admin/obtener_admin.php').map(res => res.json()).subscribe(
      data => {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.users = data.admin;

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

      //variable global para detectar el inicio de sesion y deshabilitar la pagina de login
      localStorage.setItem('login', username);

    });
  }



  verEmpresas() {
    this.nav.push(AdminEmpresasPage);
  }
  verClientes() {
    this.nav.push(AdminClientesPage);
  }

  updateDate(item) {

    this.nav.push(AdminEditPage, item)
  }

  changePassword(item) {

    this.nav.push(ChangePasswordPage, item)
  }

  logout() {
    this.userData.logout();
    this.nav.setRoot('LoginPage');
     //si sale del sistema, la variable global se establece como null;
     localStorage.clear();
  }

}
