import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { AdminClientesPage } from '../admin-clientes/admin-clientes';
import { AdminEmpresasPage } from '../admin-empresas/admin-empresas';
import { AdminEditPage } from '../admin-edit/admin-edit';
import { ChangePasswordPage } from '../change-password/change-password';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';



@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  username: string;
  users: any;

  constructor(public navParams: NavParams, public userData: UserData, public nav: NavController,
    public storage: Storage, public ServiceProvider: AuthServiceProvider) {
    //obtener empresarios

    this.getAdmin();

  }

  getAdmin() {
    this.ServiceProvider.getData()
      .subscribe(data => {
        this.users = data[7]['admin'];
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

        //variable global para detectar el inicio de sesion y deshabilitar la pagina de login
        localStorage.setItem('login', username);
      }
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
