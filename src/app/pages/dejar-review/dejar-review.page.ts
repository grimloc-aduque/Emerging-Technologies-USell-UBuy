import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {Router, ActivatedRoute} from "@angular/router"
import { timeStamp } from 'console';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataService } from 'src/app/services/data.service';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-dejar-review',
  templateUrl: './dejar-review.page.html',
  styleUrls: ['./dejar-review.page.scss'],
})
export class DejarReviewPage implements OnInit {

  reviewForm: FormGroup;

  private id_producto: string;
  producto: Producto;

  private date: Date = new Date();  

  constructor(
    private formBuilder: FormBuilder, 
    private fireStore: AngularFirestore, 
    private router: Router,
    private authService: AuthenticationService,

    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.reviewForm = this.formBuilder.group({
      calificacion: '',
      comentario: ''
    })

    this.recuperarIdProducto();
  }
  
  sendReview(){
    const formData = this.reviewForm.value;
    formData['fecha'] = this.date;
    formData['id_producto'] = this.id_producto;
    formData['id_comprador'] = this.producto.id_comprador;
    formData['id_vendedor'] = this.producto.id_vendedor;

    this.fireStore.collection('reviews')
      .add(
        formData
      )
      .then(
        res => {
          console.log(res);
          this.router.navigate(['/busqueda']);
        }
      )
      .catch(
        e => {
          console.log(e)
        }
      )
    console.log(formData)
  }

  recuperarIdProducto(){
    this.route.paramMap.subscribe(
      params => {
        this.id_producto = params.get('id_producto');
        this.getProducto();
      }
    )
  }

  getProducto(){
    this.dataService.getProductoById(this.id_producto).subscribe(
      result => {
        this.producto = result.data();
        this.producto.uid = this.id_producto;
        console.log("id", this.id_producto);

        console.log("id comprador", this.producto.id_comprador);
        console.log("id vendedor", this.producto.id_vendedor);
      }
    )
  }
}
