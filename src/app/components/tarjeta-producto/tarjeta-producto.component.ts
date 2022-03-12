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
  @Input() show_options: Boolean;
  @Input() color: String;
  @Input() onClickCard: Function;
  @Input() opciones: any[];

  constructor(private router: Router) { }

  ngOnInit() {}
  


}
