import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminEditPage } from './admin-edit';

@NgModule({
  declarations: [
    AdminEditPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminEditPage),
  ],
})
export class AdminEditPageModule {}
