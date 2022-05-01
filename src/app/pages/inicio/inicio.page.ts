import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
    private formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: '', 
      password: ''
    })
  }

  logIn() {
    const formData = this.loginForm.value;
    this.authService.SignIn(formData.email, formData.password)
      .then((res) => {
        setTimeout(
          () =>{
            if(this.authService.isEmailVerified) {
              this.router.navigate(['busqueda']);          
            } else {
              console.log('Email is not verified')
            }
          }, 
          100
        )

      }).catch((error) => {
        console.log(error.message)
      })
  }

  

}
