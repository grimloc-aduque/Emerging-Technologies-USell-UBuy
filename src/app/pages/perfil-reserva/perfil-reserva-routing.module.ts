import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilReservaPage } from './perfil-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilReservaPageRoutingModule {}
