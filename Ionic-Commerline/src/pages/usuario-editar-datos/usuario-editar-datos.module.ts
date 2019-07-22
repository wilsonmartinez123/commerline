import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsuarioEditarDatosPage } from './usuario-editar-datos';

@NgModule({
  declarations: [
    UsuarioEditarDatosPage,
  ],
  imports: [
    IonicPageModule.forChild(UsuarioEditarDatosPage),
  ],
})
export class UsuarioEditarDatosPageModule {}
