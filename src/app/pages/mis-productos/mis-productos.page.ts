import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Producto } from 'src/app/interfaces/producto';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataService } from 'src/app/services/data.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.page.html',
  styleUrls: ['./mis-productos.page.scss'],
})
export class MisProductosPage implements OnInit {
  
  private id_sesion = this.authService.sessionId

  productos: Producto[] = []

  opciones: any[] = [
    {
      nombre: 'Editar',
      handler: (producto: Producto) => {
        this.router.navigate(['/crear-editar-producto', producto.uid]);
      },
      show: (producto) => true
    },
    {
      nombre: 'Eliminar',
      handler: (producto: Producto) => {
        this.dataService.deleteProductoVendedor(producto);
        this.toastService.presentToast('Producto eliminado de mis productos')
      },
      show: (producto) => true
    },
    {
      nombre: 'Ver Reserva',
      handler: (producto: Producto) => {
        this.router.navigate(['/perfil-reserva', producto.id_comprador, producto.uid]);
      },
      show: (producto) => producto.id_comprador
    }
  ]

  constructor(
    private router: Router, 
    private dataService: DataService,
    private toastService: ToastService,
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.dataService.getProductos().subscribe(
      result => {
        this.productos = []
        result.forEach(
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
