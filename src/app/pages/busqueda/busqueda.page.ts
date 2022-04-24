import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { Producto } from 'src/app/interfaces/producto';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})

export class BusquedaPage implements OnInit {

  productos: Producto[] = []

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.productos = []
    this.dataService.getProductos().subscribe(
      result => { 
        this.productos = result.filter(product => product.id_comprador ==null)
      }
    )
  }

  onClickCard(id_producto){
    console.log(id_producto)
    this.router.navigate(['producto-detallado', id_producto]);
  }

}
