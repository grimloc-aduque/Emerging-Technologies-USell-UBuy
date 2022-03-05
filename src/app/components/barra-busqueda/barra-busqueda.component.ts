import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.scss'],
})
export class BarraBusquedaComponent implements OnInit {

  @Input() titulo: string = "";
  @Input() bg_color: string = "";

  constructor( private router: Router) { }

  ngOnInit() {}

  closeModal(){
    // this.router.navigate(['/busqueda'])
  }

}
