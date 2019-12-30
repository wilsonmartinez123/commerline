import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminClientesPage } from './admin-clientes';

@NgModule({
  declarations: [
    AdminClientesPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminClientesPage),
  ],
})
export class AdminClientesPageModule {}
