import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilReservaPageRoutingModule } from './perfil-reserva-routing.module';

import { PerfilReservaPage } from './perfil-reserva.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilReservaPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [PerfilReservaPage]
})
export class PerfilReservaPageModule {}
