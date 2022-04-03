import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { Usuario } from 'src/app/interfaces/usuario';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-producto-detallado',
  templateUrl: './producto-detallado.page.html',
  styleUrls: ['./producto-detallado.page.scss'],
})


export class ProductoDetalladoPage implements OnInit {

  private id_producto: String;
  producto: Producto;
  vendedor: Usuario;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.recuperarIdProducto();
  }

  recuperarIdProducto(){
    this.route.paramMap.subscribe(
      params => {
        this.id_producto = params.get('id_producto');
        this.getProducto();
      }
    )
  }

  getProducto(){
    this.dataService.getProductoById(this.id_producto).subscribe(
      result => {
        this.producto = result.data();
        console.log(this.producto)
        this.getUsuario();
      }
    )
  }

  getUsuario(){
    this.dataService.getUsuarioById(this.producto.id_vendedor).subscribe(
      result => {
        this.vendedor = result.data();
        console.log(this.vendedor)
      }
    )
  }

}
