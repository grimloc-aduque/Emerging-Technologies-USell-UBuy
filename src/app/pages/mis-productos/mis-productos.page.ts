import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.page.html',
  styleUrls: ['./mis-productos.page.scss'],
})
export class MisProductosPage implements OnInit {
  
  private id_sesion = 'Jla5t7VTwHQ7iRczUBFB'

  productos: Producto[] = []

  opciones: any[] = [
    {
      nombre: 'Editar',
      link: '/crear-editar-producto',
      sublink: '_id'
    },
    {
      nombre: 'Eliminar',
      link: '/mis-productos',
      sublink: ''
    },
    {
      nombre: 'Ver Reserva',
      link: '/perfil-reserva',
      sublink: 'id_comprador'
    }
  ]

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.productos = []
    this.dataService.getProductos().subscribe(
      productos => {
        productos.forEach(
          producto => {
            if(producto.id_vendedor == this.id_sesion){
              this.productos.push(producto)
            }
          }
        )
      }
    )
  }

  onClickCard(id_producto){
    this.router.navigate(['crear-editar-producto', id_producto])
  }

}
