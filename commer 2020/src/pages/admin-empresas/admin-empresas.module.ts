import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminEmpresasPage } from './admin-empresas';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    AdminEmpresasPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminEmpresasPage),
    IonicImageLoader
  ],
})
export class AdminEmpresasPageModule {}
