import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarEmpresaPage } from './agregar-empresa';

@NgModule({
  declarations: [
    AgregarEmpresaPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarEmpresaPage),
  ],
})
export class AgregarEmpresaPageModule {}
