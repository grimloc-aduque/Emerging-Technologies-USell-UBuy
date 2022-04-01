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
  
  productos: Producto[] = []

  opciones: any[] = [
    {
      nombre: 'Editar',
      link: '/crear-editar-producto'
    },
    {
      nombre: 'Eliminar',
      link: '/mis-productos'
    },
    {
      nombre: 'Ver Reserva',
      link: '/perfil-reserva'
    }
  ]

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProductos().subscribe(
      result => {
        this.productos = result
      }
    )
  }

  onClickCard(){
    this.router.navigate(['crear-editar-producto'])
  }

}
