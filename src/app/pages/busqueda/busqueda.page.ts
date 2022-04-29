import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Navigation, Router} from "@angular/router"
import { Producto } from 'src/app/interfaces/producto';
import { DataService } from 'src/app/services/data.service';
import { FiltroService } from 'src/app/services/filtro.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})

export class BusquedaPage implements OnInit {

  filtro: Object = null;
  busqueda: string = null;
  productos: Producto[] = []

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private dataService: DataService,
    private filtroService: FiltroService
    ) { }

  ngOnInit() {
    this.filtroService.currentFiltro.subscribe(filtro => {
      if(filtro){
        this.filtro = {}
        this.filtro['tipo'] = this.cleanString(filtro['tipo'])
        this.filtro['clase'] = this.cleanString(filtro['clase'])
        this.filtro['min'] = parseFloat(filtro['min'])
        this.filtro['max'] = parseFloat(filtro['max'])
        this.filtrarProductos();
      }
    })
    this.recuperarBusqueda();
    this.buscarProductos();
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

  buscarProductos(){
    this.productos = [];
    this.dataService.getProductos().subscribe(
      result => { 
        this.productos = result.filter(
          prod => {
            let full_description = prod.nombre + prod.descripcion + prod.clase + prod.tipo;
            full_description = this.cleanString(full_description);
            if(this.busqueda){
              return  prod.id_comprador ==null &&
                      full_description.includes(this.busqueda)
            }
            return prod.id_comprador == null
          }
        )
      }
    )
  }

  filtrarProductos(){
    console.log(this.filtro)
    this.productos = this.productos.filter(
      prod => {
        return  this.cleanString(prod.clase).includes(this.filtro['clase']) &&
                this.cleanString(prod.tipo).includes(this.filtro['tipo']) &&
                prod.precio > this.filtro['min'] &&
                prod.precio < this.filtro['max']
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
