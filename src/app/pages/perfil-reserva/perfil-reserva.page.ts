import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-reserva',
  templateUrl: './perfil-reserva.page.html',
  styleUrls: ['./perfil-reserva.page.scss'],
})
export class PerfilReservaPage implements OnInit {

  datosPerfil = [
    {
      nombre: 'Andrea',
      apellido: 'Martínez',
      numero: '0999999999',
      correo: 'andreamartinez@estud.usfq.edu.ec',
      carrera: 'Ingeniería Mecánica',
      calificacionComoVendedor: '4',
      calificacionComoComprador: '3'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
