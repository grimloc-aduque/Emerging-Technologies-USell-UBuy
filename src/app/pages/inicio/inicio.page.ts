import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  loginForm: FormGroup;
  constructor(
    public authService: AuthenticationService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: '', 
      password: ''
    })
  }

  logIn() {
    const formData = this.loginForm.value;
    this.authService.SignIn(formData.email, formData.password);
  }

  

}
