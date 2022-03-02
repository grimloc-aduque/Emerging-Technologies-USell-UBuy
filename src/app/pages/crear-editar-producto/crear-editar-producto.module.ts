import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearEditarProductoPageRoutingModule } from './crear-editar-producto-routing.module';

import { CrearEditarProductoPage } from './crear-editar-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearEditarProductoPageRoutingModule
  ],
  declarations: [CrearEditarProductoPage]
})
export class CrearEditarProductoPageModule {}
