import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/interfaces/review';
import { Usuario } from 'src/app/interfaces/usuario';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-perfil-publico',
  templateUrl: './perfil-publico.page.html',
  styleUrls: ['./perfil-publico.page.scss'],
})
export class PerfilPublicoPage implements OnInit {
  
  private id_vendedor: String;
  vendedor: Usuario;
  reviews: Review[] = [];
  score: number = 0;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recuperarIdVendedor();
  }

  recuperarIdVendedor(){
    this.route.paramMap.subscribe(
      params => {
        this.id_vendedor = params.get('id_vendedor')
        console.log(this.id_vendedor)
        this.getVendedor();
      }
    )
  }

  getVendedor(){
    this.dataService.getUsuarioById(this.id_vendedor).subscribe(
      result => {
        this.vendedor = result.data();
        this.getReviews();
      }
    )
  }

  getReviews(){
    this.dataService.getReviews().subscribe(
      result => {
        result.forEach(
          review => {
            if(review.id_vendedor == this.id_vendedor){
              this.reviews.push(review);
              this.score = this.score + review.calificacion;
            }
          }
        )
      }
    )
  }
  
}
