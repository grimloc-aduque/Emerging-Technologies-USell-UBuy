import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataService } from 'src/app/services/data.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.page.html',
  styleUrls: ['./mis-reservas.page.scss'],
})

export class MisReservasPage implements OnInit {

  private id_sesion = this.authService.sessionId

  productos: Producto[] = []

  opciones: any[] = [
    {
      nombre: 'Ver Vendedor',
      handler: (producto: Producto) => {
        this.router.navigate(['/perfil-reserva', producto.id_vendedor]);
      },
      show: (producto) => true
    },
    {
      nombre: 'Eliminar',
      handler: (producto: Producto) => {
        producto.id_comprador = null;
        this.dataService.deleteProductoComprador(producto);
        this.toastService.presentToast('Producto eliminado de mis reservas');
      },
      show: (producto) => true
    }
  ]


  constructor( 
    private router: Router, 
    private dataService: DataService,
    private toastService: ToastService,
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.productos = []
    this.populateProducts();
  }

  populateProducts(){
    this.dataService.getProductos().subscribe(
      result => {
        this.productos = []
        result.forEach(
          producto => {
            if(producto.id_comprador == this.id_sesion){
              this.productos.push(producto)
            }
          }
        )
      }
    )
  }

  onClickCard(id_producto){
    this.router.navigate(['producto-detallado', id_producto])
  }

}
