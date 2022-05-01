import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.scss'],
})
export class TarjetaProductoComponent implements OnInit {

  @Input() producto: Producto;
  @Input() onClickCard: Function;
  @Input() opciones: any[];

  page: string = this.router.url.split('/')[1];

  constructor(private router: Router) {}

  ngOnInit() {
  }
  
  printRoute(){
    console.log(this.page)
  }

}
