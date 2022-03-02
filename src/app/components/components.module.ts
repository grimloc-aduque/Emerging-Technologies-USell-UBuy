import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';



@NgModule({
  declarations: [
    BarraBusquedaComponent,
    MenuNavegacionComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    BarraBusquedaComponent,
    MenuNavegacionComponent
  ]
})
export class ComponentsModule { }
