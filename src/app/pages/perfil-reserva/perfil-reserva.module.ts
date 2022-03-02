import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilReservaPageRoutingModule } from './perfil-reserva-routing.module';

import { PerfilReservaPage } from './perfil-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilReservaPageRoutingModule
  ],
  declarations: [PerfilReservaPage]
})
export class PerfilReservaPageModule {}
