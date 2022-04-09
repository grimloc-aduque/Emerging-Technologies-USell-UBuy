import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearEditarProductoPageRoutingModule } from './crear-editar-producto-routing.module';

import { CrearEditarProductoPage } from './crear-editar-producto.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CrearEditarProductoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CrearEditarProductoPage]
})
export class CrearEditarProductoPageModule {}
