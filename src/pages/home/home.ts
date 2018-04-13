import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { ProveedorProvider } from '../../providers/proveedor/proveedor';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

usuarios : any;
  constructor(public navCtrl: NavController, public proveedor : ProveedorProvider) {

  }



ionViewDidLoad() {

this.proveedor.obtenerdatos()
       .subscribe(

        (data)=>{this.usuarios = data;},
        (error)=>{console.log(error);}
       

       )

}




 gologin():void{
  this.navCtrl.push(LoginPage)
  }
}
