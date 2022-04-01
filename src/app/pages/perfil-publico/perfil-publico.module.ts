import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPublicoPageRoutingModule } from './perfil-publico-routing.module';

import { PerfilPublicoPage } from './perfil-publico.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPublicoPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [PerfilPublicoPage]
})
export class PerfilPublicoPageModule {}
