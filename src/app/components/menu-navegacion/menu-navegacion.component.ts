import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-navegacion',
  templateUrl: './menu-navegacion.component.html',
  styleUrls: ['./menu-navegacion.component.scss'],
})
export class MenuNavegacionComponent implements OnInit {

  @Input() seccion:string;

  opciones: any = [
    {
      icono: 'home-outline',
      nombre: 'Buscar',
      link: '/busqueda',
    },
    {
      icono: 'pricetags-outline',
      nombre: 'Vender',
      link: '/mis-productos',
    },
    {
      icono: 'bookmark-outline',
      nombre: 'Reservas',
      link: '/mis-reservas',
    },
    {
      icono: 'person-circle-outline',
      nombre: 'Perfil',
      link: '/mi-perfil',
    },
  ]

  constructor() { }

  ngOnInit() {}
}
