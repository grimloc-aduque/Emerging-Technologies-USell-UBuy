import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.page.html',
  styleUrls: ['./mis-reservas.page.scss'],
})

export class MisReservasPage implements OnInit {

  productos: Producto[] = []

  opciones: any[] = [
    {
      nombre: 'Ver Vendedor',
      link: '/perfil-reserva',
      sublink: 'id_vendedor'
    },
    {
      nombre: 'Eliminar',
      link: '/mis-reservas',
      sublink: 'id_producto'
    }
  ]
  constructor( private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProductos().subscribe(
      result => {
        this.productos = result
      }
    )
  }

  onClickCard(id_producto){
    this.router.navigate(['producto-detallado', id_producto])
  }

}
