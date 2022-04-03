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
      nombre: 'Buscar',
      color: 'blue',
      link: '/busqueda',
    },
    {
      icono: 'pricetags-outline',
      nombre: 'Vender',
      color: 'red',
      link: '/mis-productos',
    },
    {
      icono: 'bookmark-outline',
      nombre: 'Reservas',
      color: 'green',
      link: '/mis-reservas',
    },
    {
      icono: 'person-circle-outline',
      nombre: 'Perfil',
      color: 'yellow',
      link: '/mi-perfil',
    },
  ]

  constructor() { }

  ngOnInit() {}
}
