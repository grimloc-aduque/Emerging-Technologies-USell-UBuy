import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/interfaces/review';
import { Usuario } from 'src/app/interfaces/usuario';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {

  perfil: Usuario;
  reviews: Review[] = [];

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.getUsuarioById('Jla5t7VTwHQ7iRczUBFB').subscribe(
      result => {
        this.perfil = result.data();
      }
    )

    this.dataService.getReviews().subscribe(
      result => {
        this.reviews = result
      }
    )

  }

}
