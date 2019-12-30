import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OffersPage } from './offers';
import { IonicImageLoader } from 'ionic-image-loader';


@NgModule({
  declarations: [
    OffersPage,
  ],
  imports: [
    IonicPageModule.forChild(OffersPage),
    IonicImageLoader,
  ],
})
export class OffersPageModule {}
