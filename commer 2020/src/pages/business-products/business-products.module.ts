import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessProductsPage } from './business-products';
import { IonicImageLoader } from 'ionic-image-loader';


@NgModule({
  declarations: [
    BusinessProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessProductsPage),
    IonicImageLoader
  ],
})
export class BusinessProductsPageModule {}
