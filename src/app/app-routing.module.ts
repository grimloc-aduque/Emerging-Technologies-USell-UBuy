import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BusquedaPage } from './pages/busqueda/busqueda.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'busqueda',
    pathMatch: 'full'
  },
  {
    path: 'busqueda',
    loadChildren: () => import('./pages/busqueda/busqueda.module').then( m => m.BusquedaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'crear-cuenta',
    loadChildren: () => import('./pages/crear-cuenta/crear-cuenta.module').then( m => m.CrearCuentaPageModule)
  },
  {
    path: 'producto-detallado',
    loadChildren: () => import('./pages/producto-detallado/producto-detallado.module').then( m => m.ProductoDetalladoPageModule)
  },
  {
    path: 'mis-productos',
    loadChildren: () => import('./pages/mis-productos/mis-productos.module').then( m => m.MisProductosPageModule)
  },
  {
    path: 'mi-perfil',
    loadChildren: () => import('./pages/mi-perfil/mi-perfil.module').then( m => m.MiPerfilPageModule)
  },
  {
    path: 'mis-reservas',
    loadChildren: () => import('./pages/mis-reservas/mis-reservas.module').then( m => m.MisReservasPageModule)
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./pages/editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },
  {
    path: 'crear-editar-producto',
    loadChildren: () => import('./pages/crear-editar-producto/crear-editar-producto.module').then( m => m.CrearEditarProductoPageModule)
  },  {
    path: 'perfil-publico',
    loadChildren: () => import('./pages/perfil-publico/perfil-publico.module').then( m => m.PerfilPublicoPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
