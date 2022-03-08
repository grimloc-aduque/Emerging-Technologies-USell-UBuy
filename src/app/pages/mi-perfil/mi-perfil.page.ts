import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {

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
