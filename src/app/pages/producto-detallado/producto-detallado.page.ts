import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { Usuario } from 'src/app/interfaces/usuario';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataService } from 'src/app/services/data.service';
import { PushService } from 'src/app/services/push.service';

@Component({
  selector: 'app-producto-detallado',
  templateUrl: './producto-detallado.page.html',
  styleUrls: ['./producto-detallado.page.scss'],
})


export class ProductoDetalladoPage implements OnInit {

  private id_producto: string;
  producto: Producto;
  vendedor: Usuario;

  constructor(
    private route: ActivatedRoute, 
    private dataService: DataService,
    private router: Router,
    private authService: AuthenticationService,
    private pushService: PushService
    ) { }

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
        this.producto.uid = this.id_producto;
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

  clickReservar(){
    const id_sesion = this.authService.sessionId
    this.producto.id_comprador = id_sesion
    this.dataService.update('productos', this.producto.uid, this.producto);
    this.pushService.enviarNotificacionReserva(this.producto);
    this.router.navigateByUrl('/mis-reservas');
  }

}
