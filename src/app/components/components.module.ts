import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';
import { TarjetaProductoComponent } from './tarjeta-producto/tarjeta-producto.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BarraBusquedaComponent,
    MenuNavegacionComponent,
    TarjetaProductoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    BarraBusquedaComponent,
    MenuNavegacionComponent,
    TarjetaProductoComponent
  ]
})
export class ComponentsModule { }
