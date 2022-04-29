import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FiltroService } from 'src/app/services/filtro.service';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.scss'],
})
export class BarraBusquedaComponent implements OnInit {

  @Input() titulo: string = "";
  filtro;

  constructor( 
    private router: Router,
    private filtroSevice: FiltroService,
    public alertController: AlertController) { }
    
  public busqueda: string = null;
  public seccion: string;

  ngOnInit() {
    const url_fields = this.router.url.split('/')
    this.seccion = url_fields[1]
    if(url_fields[2]){
      this.busqueda = url_fields[2]
    }
  }

  onSearch(evento){
    this.router.navigate(['/busqueda', evento.target.value]);
  }

  async presentfilterPrompt() {
    const alert = await this.alertController.create({
      header: 'Filtrar Busqueda',
      inputs: [
        {
          name: 'tipo',
          placeholder: 'Tipo de Producto',
          type: 'text',
        },
        {
          name: 'clase',
          placeholder: 'Clase donde fue usado',
          type: 'text',
        },
        {
          name: 'min',
          placeholder: 'Precio minimo',
          type: 'number',
          min: '0',
          max: '999'
        },
        {
          name: 'max',
          placeholder: 'Precio maximo',
          type: 'number',
          min: '0',
          max: '999'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Filtrar',
          handler: (filtro) => {
            if(!filtro['min'])
              filtro['min'] = 0
            if(!filtro['max'])
              filtro['max'] = 9999
            this.filtroSevice.changeFiltro(filtro)
          }
        }
      ]
    });

    await alert.present();
  }


}
