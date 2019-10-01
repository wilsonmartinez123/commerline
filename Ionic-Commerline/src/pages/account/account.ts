import { Component } from '@angular/core';

import { AlertController, NavController, ModalController, NavParams } from 'ionic-angular';

import { UserData } from '../../providers/user-data';
import { ChangePasswordPage } from '../change-password/change-password';
import { AgregarEmpresaPage } from '../agregar-empresa/agregar-empresa';
import { AgregarSucursalPage } from '../agregar-sucursal/agregar-sucursal';
import { VerEmpresaPage } from '../ver-empresa/ver-empresa';
import { AgregarProductoPage } from '../agregar-producto/agregar-producto';
import { ActualizarDatosPage } from '../actualizar-datos/actualizar-datos';
import { AgregarProductosOfertaPage } from '../agregar-productos-oferta/agregar-productos-oferta';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

export interface Config {
  empresa: string;
}

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {



  username: string;
  users: any;

  //currentItems: Item[];

  constructor(public alertCtrl: AlertController, public nav: NavController, public userData: UserData,
    public ServiceProvider: AuthServiceProvider, public modalCtrl: ModalController, public navParams: NavParams, public storage: Storage
    //public items: Items
  ) {

    //obtener clientes
    this.getCustomers();



  }

  getCustomers() {
    this.ServiceProvider.getCustomers()
      .then(data => {
        this.users = data['clientes'];
        console.log(this.users);
      });
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

    localStorage.clear();
  }

  support() {
    this.nav.push('SupportPage');
  }


  agregarProducto(item) {

    let alert = this.alertCtrl.create({

      title: 'El producto o los productos que va a ingresar estan en oferta?',
      message: 'recuerda que registrar productos en oferta, tiene un costo',
      buttons: [

        {

          text: 'SI',
          //role: 'SI',

          handler: () => {

            let json = JSON.stringify(item.id_cliente);
            localStorage.setItem('id_cliente', json);

            // envia id_empresa, una vez registra productos lista los que ya ha ingresado. 
            let empresa = JSON.stringify(item);
            localStorage.setItem('id_empresa', empresa);

            this.nav.push(AgregarProductosOfertaPage, { item: item });

          }

        },

        {

          text: 'NO',
          handler: () => {

            let json = JSON.stringify(item.id_cliente);
            localStorage.setItem('id_cliente', json);
            //this.nav.push(AgregarProductoPage);

            // envia id_empresa, una vez registra productos lista los que ya ha ingresado. 
            let empresa = JSON.stringify(item);
            localStorage.setItem('id_empresa', empresa);

            this.nav.push(AgregarProductoPage, { item: item });

          }

        }



      ]

    });
    alert.present();
  }

  verProducto(item) {
    //this.ParametroService.myParam = id_empresa;


    let json = JSON.stringify(item.id_empresa);
    localStorage.setItem('id_empresa', json);

    //envia datos del cliente para poder agregar producto
    let cliente = JSON.stringify(item);
    localStorage.setItem('item', cliente);

    this.nav.push(HomePage, { item: item });

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
