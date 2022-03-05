import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-producto-detallado',
  templateUrl: './producto-detallado.page.html',
  styleUrls: ['./producto-detallado.page.scss'],
})
export class ProductoDetalladoPage implements OnInit {

  producto: Producto = {
    id: '1',
    nombre: 'Calculo de Stewart 1',
    descripcion: 'Libro de calculo para ingenierias',
    tipo: 'Libro de Texto',
    clase: 'Calculo 1',
    precio: 19.99,
    precio_negociable: false,
    url_imagen: 'https://1.bp.blogspot.com/-6MTxuinGnq4/YAdpsbm-azI/AAAAAAAANp8/V939GxHEYYM1Nm9NByaGT-obPoO8WhJbACLcBGAsYHQ/s1022/calculo-de-una-variable-trascendentes-tempranas-7ma-edicion-james-stewart-freelibros.jpg' 
  }

  vendedor: Usuario = {
    nombre: 'Juan',
    apellido: 'Bernardo',
    celular: '0999999999',
    correo: 'jbcastelli@asig.com.ec',
    carrera: 'Medios Interactivos'
  }

  constructor() { }

  ngOnInit() {
  }

}
