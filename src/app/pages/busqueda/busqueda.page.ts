import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import { Producto } from 'src/app/interfaces/producto';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})

export class BusquedaPage implements OnInit {

  busqueda: string = null;
  productos: Producto[] = []

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private dataService: DataService
    ) { }

  ngOnInit() {
    this.productos = [];
    this.recuperarBusqueda();
    this.dataService.getProductos().subscribe(
      result => { 
        console.log(this.busqueda)
        this.productos = result.filter(
          product => {
            let full_description = product.nombre + product.descripcion + product.clase;
            full_description = this.cleanString(full_description);
            console.log('Producto: ', full_description, " - Busqueda: ", this.busqueda)
            if(this.busqueda){
              return  product.id_comprador ==null &&
                      full_description.includes(this.busqueda)
            }
            return product.id_comprador == null
          }
        )
      }
    )
  }

  recuperarBusqueda(){
    this.route.paramMap.subscribe(
      params => {
        this.busqueda = params.get('busqueda');
        if(this.busqueda)
          this.busqueda = this.cleanString(this.busqueda)
      }
    )
  }

  cleanString(str: string){
    str = str.toLowerCase();
    str = str.normalize("NFD");
    str = str.replace(/[\u0300-\u036f]/g, "");
    return str;
  }

  onClickCard(id_producto){
    console.log(id_producto)
    
    this.router.navigate(['producto-detallado', id_producto]);
  }

}
