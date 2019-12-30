import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarSucursalPage } from './agregar-sucursal';

@NgModule({
  declarations: [
    AgregarSucursalPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarSucursalPage),
  ],
})
export class AgregarSucursalPageModule {}
