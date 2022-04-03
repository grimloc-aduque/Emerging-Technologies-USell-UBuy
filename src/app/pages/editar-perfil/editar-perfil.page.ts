import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  private id_usuario:String;
  perfil: Usuario;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id_usuario = 'Jla5t7VTwHQ7iRczUBFB'
    this.dataService.getUsuarioById(this.id_usuario).subscribe(
      result => {
        this.perfil = result.data();
      }
    )
  }

}
