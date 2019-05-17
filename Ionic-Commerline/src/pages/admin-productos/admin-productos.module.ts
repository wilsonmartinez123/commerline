import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminProductosPage } from './admin-productos';

@NgModule({
  declarations: [
    AdminProductosPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminProductosPage),
  ],
})
export class AdminProductosPageModule {}
