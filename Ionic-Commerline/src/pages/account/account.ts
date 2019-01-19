import { Component } from '@angular/core';

import { AlertController, NavController, ModalController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';
import { ChangePasswordPage } from '../change-password/change-password';
import { AgregarEmpresaPage } from '../agregar-empresa/agregar-empresa';
import { Http, Headers } from '@angular/http';
//import { Item } from '../../assets/item';
//import { Items } from '../../providers';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  username: string;
  users: any;

  //currentItems: Item[];

  constructor(public alertCtrl: AlertController, public nav: NavController, public userData: UserData,
    public modalCtrl: ModalController,  private http: Http
    //public items: Items
  ) {
    // this.currentItems = this.items.query();


    //obtener usuarios
    this.http.get('http://localhost/ionic-php-mysql/obtener_usuarios.php').map(res => res.json()).subscribe(
      data => {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.users = data.usuarios;
        //this.categories = Array.of(this.categories);

      },
      error => {
        console.log("Oops!", error);
      }

    );
  }

  ngAfterViewInit() {
    this.getUsername();
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  changeUsername() {
    let alert = this.alertCtrl.create({
      title: 'Change Username',
      buttons: [
        'Cancel'
      ]
    });
    alert.addInput({
      name: 'username',
      value: this.username,
      placeholder: 'username'
    });
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        this.userData.setUsername(data.username);
        this.getUsername();
      }
    });

    alert.present();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  changePassword(item) {
    console.log('Clicked to change password');
    //this.nav.push('ChangePasswordPage');
    this.nav.push(ChangePasswordPage, item)
  }

  logout() {
    this.userData.logout();
    this.nav.setRoot('LoginPage');
  }

  support() {
    this.nav.push('SupportPage');
  }


  agregarProducto() {
    this.nav.push('AgregarProductoPage');
  }

  verProducto() {
    this.nav.push('HomePage');
  }

  agregarEmpresa() {
    this.nav.push(AgregarEmpresaPage)
  }

}
