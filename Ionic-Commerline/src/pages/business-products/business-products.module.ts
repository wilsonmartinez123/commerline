import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessProductsPage } from './business-products';

@NgModule({
  declarations: [
    BusinessProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessProductsPage),
  ],
})
export class BusinessProductsPageModule {}
