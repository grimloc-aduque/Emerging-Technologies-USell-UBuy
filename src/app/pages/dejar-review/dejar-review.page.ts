import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {Router} from "@angular/router"
import { timeStamp } from 'console';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-dejar-review',
  templateUrl: './dejar-review.page.html',
  styleUrls: ['./dejar-review.page.scss'],
})
export class DejarReviewPage implements OnInit {

  reviewForm: FormGroup;

  private id_comprador = this.authService.sessionId
  private id_vendedor = '7LlbWxXaePqayFUc00ID'
  private id_producto = 'SPgWCa0tBo6u2ZWHx9dw'

  private date: Date = new Date();  

  constructor(
    private formBuilder: FormBuilder, 
    private fireStore: AngularFirestore, 
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.reviewForm = this.formBuilder.group({
      calificacion: '',
      comentario: ''
    })
  }
  
  sendReview(){
    const formData = this.reviewForm.value;
    formData['fecha'] = this.date;
    formData['id_producto'] = this.id_producto;
    formData['id_comprador'] = this.id_comprador;
    formData['id_vendedor'] = this.id_vendedor;

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

}
