import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-crear-editar-producto',
  templateUrl: './crear-editar-producto.page.html',
  styleUrls: ['./crear-editar-producto.page.scss'],
})
export class CrearEditarProductoPage implements OnInit {

  id_producto: String;
  producto: Producto ={
    _id: '',
    nombre: '',
    descripcion: '',
    tipo: '',
    clase: '',
    precio: 0,
    negociable: true,
    url_imagen: '',
    id_vendedor: '',
    id_comprador: ''
  }

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.recuperarIdProducto();
  }


  recuperarIdProducto(){
    this.route.paramMap.subscribe(
      params => {
        if(params.get('id_producto')){
          this.id_producto = params.get('id_producto');
          this.getProducto();
        }
          
      }
    )
  }

  getProducto(){
    this.dataService.getProductoById(this.id_producto).subscribe(
      result => {
        this.producto = result.data();
        console.log(this.producto)
      }
    )
  }

}
