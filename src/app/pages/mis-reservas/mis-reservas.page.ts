import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.page.html',
  styleUrls: ['./mis-reservas.page.scss'],
})

export class MisReservasPage implements OnInit {

  productos: Producto[] = [
    {
      id: '1',
      nombre: 'Calculo de Stewart 1',
      descripcion: 'Libro de calculo para ingenierias',
      tipo: 'Libro de Texto',
      clase: 'Calculo 1',
      precio: 19.99,
      precio_negociable: false,
      url_imagen: 'https://1.bp.blogspot.com/-6MTxuinGnq4/YAdpsbm-azI/AAAAAAAANp8/V939GxHEYYM1Nm9NByaGT-obPoO8WhJbACLcBGAsYHQ/s1022/calculo-de-una-variable-trascendentes-tempranas-7ma-edicion-james-stewart-freelibros.jpg' 
    },
    {
      id: '2',
      nombre: 'Calculo de Stewart 2',
      descripcion: 'Libro de calculo para ingenierias',
      tipo: 'Libro de Texto',
      clase: 'Calculo 1',
      precio: 19.99,
      precio_negociable: false,
      url_imagen: 'https://1.bp.blogspot.com/-6MTxuinGnq4/YAdpsbm-azI/AAAAAAAANp8/V939GxHEYYM1Nm9NByaGT-obPoO8WhJbACLcBGAsYHQ/s1022/calculo-de-una-variable-trascendentes-tempranas-7ma-edicion-james-stewart-freelibros.jpg' 
    },
    {
      id: '3',
      nombre: 'Calculo de Stewart 3',
      descripcion: 'Libro de calculo para ingenierias',
      tipo: 'Libro de Texto',
      clase: 'Calculo 1',
      precio: 19.99,
      precio_negociable: false,
      url_imagen: 'https://1.bp.blogspot.com/-6MTxuinGnq4/YAdpsbm-azI/AAAAAAAANp8/V939GxHEYYM1Nm9NByaGT-obPoO8WhJbACLcBGAsYHQ/s1022/calculo-de-una-variable-trascendentes-tempranas-7ma-edicion-james-stewart-freelibros.jpg' 
    },
    {
      id: '4',
      nombre: 'Calculo de Stewart 4',
      descripcion: 'Libro de calculo para ingenierias',
      tipo: 'Libro de Texto',
      clase: 'Calculo 1',
      precio: 19.99,
      precio_negociable: false,
      url_imagen: 'https://1.bp.blogspot.com/-6MTxuinGnq4/YAdpsbm-azI/AAAAAAAANp8/V939GxHEYYM1Nm9NByaGT-obPoO8WhJbACLcBGAsYHQ/s1022/calculo-de-una-variable-trascendentes-tempranas-7ma-edicion-james-stewart-freelibros.jpg' 
    },
  ]

  opciones: any[] = [
    {
      nombre: 'Ver Producto',
      link: '/producto-detallado'
    },
    {
      nombre: 'Contactar Comprador',
      link: '/perfil-reserva'
    },
    {
      nombre: 'Eliminar',
      link: '/mis-reservas'
    }
  ]
  constructor( private router: Router) { }

  ngOnInit() {
  }

  onClickCard(){
    this.router.navigate(['producto-detallado'])
  }

}
