import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/interfaces/review';
import { Usuario } from 'src/app/interfaces/usuario';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-perfil-reserva',
  templateUrl: './perfil-reserva.page.html',
  styleUrls: ['./perfil-reserva.page.scss'],
})
export class PerfilReservaPage implements OnInit {
  perfilContacto: Usuario;
  reviews: Review[] = [];

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

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.getUsuarioById('Jla5t7VTwHQ7iRczUBFB').subscribe(
      result => {
        this.perfilContacto = result.data();
      }
    )

    this.dataService.getReviews().subscribe(
      result => {
        this.reviews = result
      }
    )
  }
}
