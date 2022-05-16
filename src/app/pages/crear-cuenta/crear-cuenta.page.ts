import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {

  newUserForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    public authService: AuthenticationService,
  ) {}

  ngOnInit() {
    this.newUserForm = this.formBuilder.group({
      nombre: '',
      apellido: '',
      celular: '',
      email: '', 
      carrera: '',
      password: ''
    })
  }


  signUp(){
    let formData = this.newUserForm.value;
    this.authService.RegisterUser(formData)
  }

}
