import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminProductosPage } from './admin-productos';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    AdminProductosPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminProductosPage),
    IonicImageLoader,
  ],
})
export class AdminProductosPageModule {}
