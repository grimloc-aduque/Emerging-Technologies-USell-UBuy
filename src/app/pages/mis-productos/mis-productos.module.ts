import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisProductosPageRoutingModule } from './mis-productos-routing.module';

import { MisProductosPage } from './mis-productos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisProductosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MisProductosPage]
})
export class MisProductosPageModule {}
