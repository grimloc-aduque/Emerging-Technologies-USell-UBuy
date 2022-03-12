import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-navegacion',
  templateUrl: './menu-navegacion.component.html',
  styleUrls: ['./menu-navegacion.component.scss'],
})
export class MenuNavegacionComponent implements OnInit {

  opciones: any = [
    {
      icono: 'home-outline',
      nombre: 'Busqueda',
      color: 'blue',
      link: '/busqueda',
    },
    {
      icono: 'person-circle-outline',
      nombre: 'Mi Perfil',
      color: 'yellow',
      link: '/mi-perfil',
    },
    {
      icono: 'pricetags-outline',
      nombre: 'Mis Productos',
      color: 'red',
      link: '/mis-productos',
    },
    {
      icono: 'bookmark-outline',
      nombre: 'Mis Reservas',
      color: 'green',
      link: '/mis-reservas',
    },
  ]

  constructor() { }

  ngOnInit() {}
}
