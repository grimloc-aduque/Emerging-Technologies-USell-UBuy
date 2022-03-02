import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearEditarProductoPage } from './crear-editar-producto.page';

const routes: Routes = [
  {
    path: '',
    component: CrearEditarProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearEditarProductoPageRoutingModule {}
