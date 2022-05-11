import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/interfaces/review';
import { Usuario } from 'src/app/interfaces/usuario';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-perfil-reserva',
  templateUrl: './perfil-reserva.page.html',
  styleUrls: ['./perfil-reserva.page.scss'],
})
export class PerfilReservaPage implements OnInit {

  private id_usuario: String;
  perfil: Usuario;
  reviewsVendedor: Review[] = [];
  scoreVendedor: number = 0;
  reviewsComprador: Review[] = [];
  scoreComprador: number = 0;

  private id_producto: string;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.recuperarIdUsuario();

    let id = this.route.snapshot.paramMap.get('id_producto');
    console.log("id:", id);
    this.id_producto = id;
    console.log("id_producto:", this.id_producto);
  }

  recuperarIdUsuario(){
    this.route.paramMap.subscribe(
      params => {
        this.id_usuario = params.get('id_usuario')
        if(this.id_usuario == null){
          this.router.navigate(['/mis-productos']);
        }
        console.log(this.id_usuario)
        this.getUsuario();
      }
    )
  }

  getUsuario(){
    this.dataService.getUsuarioById(this.id_usuario).subscribe(
      result => {
        this.perfil = result.data();
        this.getReviews();
      }
    )
  }

  getReviews(){
    this.dataService.getReviews().subscribe(
      result => {
        this.reviewsComprador = []
        this.reviewsVendedor = []
        this.scoreComprador = 0
        this.scoreVendedor = 0
        result.forEach(
          review => {
            if(review.id_vendedor == this.id_usuario){
              this.reviewsVendedor.push(review);
              this.scoreVendedor = this.scoreVendedor + review.calificacion;
            }
            if(review.id_comprador == this.id_usuario){
              this.reviewsComprador.push(review);
              this.scoreComprador = this.scoreComprador + review.calificacion
            }
          }
        )
        this.scoreVendedor = this.scoreVendedor/this.reviewsVendedor.length
        this.scoreComprador = this.scoreComprador/this.reviewsComprador.length
      }
    )
  }

  evaluar(){
    console.log(this.id_producto)
    
    this.router.navigate(['dejar-review', this.id_producto]);
  }

}
