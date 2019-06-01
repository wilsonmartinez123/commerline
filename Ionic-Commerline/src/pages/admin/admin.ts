import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { Http } from '@angular/http';
import { AdminClientesPage } from '../admin-clientes/admin-clientes';
import { AdminEmpresasPage } from '../admin-empresas/admin-empresas';


@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  username: string;
  users: any;

  constructor(public navParams: NavParams, public userData: UserData, public nav: NavController, private http: Http) {
    //obtener usuarios

    this.http.get('http://localhost/ionic-php-mysql/obtener_usuarios.php').map(res => res.json()).subscribe(
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
    });
  }



  verEmpresas() {
    this.nav.push(AdminEmpresasPage);
  }
  verClientes() {
    this.nav.push(AdminClientesPage);
  }
  updateDate() {

  }
  changePassword() {
  }

  logout() {
    this.userData.logout();
    this.nav.setRoot('LoginPage');
  }

}
