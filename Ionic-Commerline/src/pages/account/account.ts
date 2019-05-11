import { Component } from '@angular/core';

import { AlertController, NavController, ModalController, NavParams } from 'ionic-angular';

import { UserData } from '../../providers/user-data';
import { ChangePasswordPage } from '../change-password/change-password';
import { AgregarEmpresaPage } from '../agregar-empresa/agregar-empresa';
import { Http, Headers } from '@angular/http';
import { AgregarSucursalPage } from '../agregar-sucursal/agregar-sucursal';
import { VerEmpresaPage } from '../ver-empresa/ver-empresa';
import { AgregarProductoPage } from '../agregar-producto/agregar-producto';
//import { Item } from '../../assets/item';
//import { Items } from '../../providers';
import { ActualizarDatosPage } from '../actualizar-datos/actualizar-datos';
import { AgregarProductosOfertaPage } from '../agregar-productos-oferta/agregar-productos-oferta';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  username: string;
  users: any;
  hidden: boolean;

  //currentItems: Item[];

  constructor(public alertCtrl: AlertController, public nav: NavController, public userData: UserData,
    public modalCtrl: ModalController, private http: Http, public navParams: NavParams,
    //public items: Items
  ) {
    // this.currentItems = this.items.query();

    //obtener el valor hidden de agregar empresa
    this.hidden = navParams.get('data');

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

  updateData(item) {

    this.nav.push(ActualizarDatosPage, item)

  }

  changePassword(item) {
    console.log('Clicked to change password');
    this.nav.push(ChangePasswordPage, item)
  }

  logout() {
    this.userData.logout();
    this.nav.setRoot('LoginPage');
  }

  support() {
    this.nav.push('SupportPage');
  }


  agregarProducto(id_cliente) {

    let alert = this.alertCtrl.create({

      title: 'El producto o los productos que va a ingresar estan en oferta?',
      message: 'recuerda que registrar productos en oferta, tiene un costo',
      buttons: [

        {

          text: 'SI',
          //role: 'SI',

          handler: () => {

            localStorage.setItem('id_cliente', id_cliente);
            this.nav.push(AgregarProductosOfertaPage);

          }

        },

        {

          text: 'NO',
          handler: () => {


            localStorage.setItem('id_cliente', id_cliente);
            this.nav.push(AgregarProductoPage);



          }

        }



      ]

    });
    alert.present();
  }

  verProducto(id_empresa) {
    //this.ParametroService.myParam = id_empresa;
    localStorage.setItem('id_empresa', id_empresa);
    this.nav.push('HomePage');
  }

  verEmpresa(item) {
    this.nav.push(VerEmpresaPage, item)
  }

  agregarEmpresa(item) {
    this.nav.push(AgregarEmpresaPage, item)
  }

  agregarSucursal(item) {

    this.nav.push(AgregarSucursalPage, item)
  }

}
