import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoDetalladoPage } from './producto-detallado.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoDetalladoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoDetalladoPageRoutingModule {}
