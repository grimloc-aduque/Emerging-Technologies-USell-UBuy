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

  private id_sesion = 'Jla5t7VTwHQ7iRczUBFB'
  perfil: Usuario;
  reviewsVendedor: Review[] = [];
  scoreVendedor: number = 0;
  reviewsComprador: Review[] = [];
  scoreComprador: number = 0;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUsuario();
  }

  getUsuario(){
    this.dataService.getUsuarioById(this.id_sesion).subscribe(
      result => {
        this.perfil = result.data();
        this.getReviews();
      }
    )
  }

  getReviews(){
    this.dataService.getReviews().subscribe(
      result => {
        result.forEach(
          review => {
            if(review.id_vendedor == this.id_sesion){
              this.reviewsVendedor.push(review);
              this.scoreVendedor = this.scoreVendedor + review.calificacion;
            }
            if(review.id_comprador == this.id_sesion){
              this.reviewsComprador.push(review);
              this.scoreComprador = this.scoreComprador + review.calificacion
            }
          }
        )
      }
    )
  }

}
