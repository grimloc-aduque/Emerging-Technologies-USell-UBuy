import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPublicoPageRoutingModule } from './perfil-publico-routing.module';

import { PerfilPublicoPage } from './perfil-publico.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPublicoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PerfilPublicoPage]
})
export class PerfilPublicoPageModule {}
