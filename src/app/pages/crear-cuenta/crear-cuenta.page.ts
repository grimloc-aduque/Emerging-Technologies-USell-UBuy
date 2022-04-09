import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {Router} from "@angular/router"


@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {

  newUserForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private fireStore: AngularFirestore, 
    private router: Router
  ) {}

  ngOnInit() {
    this.newUserForm = this.formBuilder.group({
      nombre: '',
      apellido: '',
      celular: '',
      correo: '', 
      carrera: '',
      password: ''
    })
  }

  createUser(){
    const formData = this.newUserForm.value;
    formData['productos_ofertados'] = [];
    formData['productos_reservados'] = [];
    formData['reviews_comprador'] = [];
    formData['reviews_vendedor'] = [];

    this.fireStore.collection('usuarios')
      .add(
        formData
      )
      .then(
        res => {
          console.log(res);
          this.router.navigate(['/inicio']);
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
