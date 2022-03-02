import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoDetalladoPageRoutingModule } from './producto-detallado-routing.module';

import { ProductoDetalladoPage } from './producto-detallado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoDetalladoPageRoutingModule
  ],
  declarations: [ProductoDetalladoPage]
})
export class ProductoDetalladoPageModule {}
