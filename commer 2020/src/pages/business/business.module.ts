import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessPage } from './business';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    BusinessPage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessPage),
    IonicImageLoader
  ],
})
export class BusinessPageModule {}
