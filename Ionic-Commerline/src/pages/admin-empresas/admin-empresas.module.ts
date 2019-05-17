import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminEmpresasPage } from './admin-empresas';

@NgModule({
  declarations: [
    AdminEmpresasPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminEmpresasPage),
  ],
})
export class AdminEmpresasPageModule {}
