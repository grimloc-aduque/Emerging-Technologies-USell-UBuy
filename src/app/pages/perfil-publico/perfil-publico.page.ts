import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-publico',
  templateUrl: './perfil-publico.page.html',
  styleUrls: ['./perfil-publico.page.scss'],
})
export class PerfilPublicoPage implements OnInit {

  datosPerfil = [
    {
      nombre: 'Juan',
      apellido: 'Bernardo',
      calificacionComoVendedor: '4',
    }
  ]

  comentarios = [
    {
      nombre:'Andrea',
      apellido: 'Martínez',
      fecha:'10 de febrero de 2022',
      comentario: 'Todo Bien ...',
    },
    {
      nombre:'Juan',
      apellido: 'Carrera',
      fecha:'09 de febrero de 2022',
      comentario: 'Entregó Rápido ...',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
