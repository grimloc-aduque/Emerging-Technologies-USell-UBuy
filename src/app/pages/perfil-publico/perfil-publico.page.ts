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
  
  //private id_vendedor: String;
  vendedor: Usuario;
  reviews: Review[] = [];

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.getUsuarioById('Jla5t7VTwHQ7iRczUBFB').subscribe(
      result => {
        this.vendedor = result.data();
      }
    )

    this.dataService.getReviews().subscribe(
      result => {
        this.reviews = result
      }
    )

  }

  // recuperarIdVendedor(){
  //   this.route.paramMap.subscribe(
  //     params => {
  //       this.id_vendedor = params.get('id_vendedor')
  //       console.log(this.id_vendedor)
  //     }
  //   )
  // }

  // getVendedor(){
  //   this.dataService.getUsuarioById(this.id_vendedor).subscribe(
  //     result => {
  //       this.vendedor = result.data();
  //       this.getReviews();
  //     }
  //   )
  // }

  // getReviews(){
  //   this.dataService.getReviews().subscribe(
  //     results => {
  //       results.forEach(
  //         result => {
  //           if(result.id_vendedor == this.id_vendedor){
  //             console.log(result)
  //             this.reviews.push(result)
  //           }
  //         }
  //       )
  //       console.log(this.reviews)
  //     }
  //   )
  // }
  
}
