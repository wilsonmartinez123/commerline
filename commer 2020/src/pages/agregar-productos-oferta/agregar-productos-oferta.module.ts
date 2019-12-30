import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarProductosOfertaPage } from './agregar-productos-oferta';

@NgModule({
  declarations: [
    AgregarProductosOfertaPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarProductosOfertaPage),
  ],
})
export class AgregarProductosOfertaPageModule {}
