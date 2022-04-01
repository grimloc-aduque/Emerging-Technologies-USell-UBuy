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

  producto: Producto;

  vendedor: Usuario;

  id_producto: String = ""

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id_producto = params.get('id_producto')
      }
    )

    this.dataService.getProductoById(this.id_producto).subscribe(
      result => {
        this.producto = result.data();
        console.log(this.producto)

        this.dataService.getUsuarioById(this.producto.id_vendedor).subscribe(
          result => {
            this.vendedor = result.data();
            console.log(this.vendedor)
          }
        )
        
      }
    )


  }

}
