import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {Router} from "@angular/router"
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PushService } from 'src/app/services/push.service';


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
    private router: Router,
    public authService: AuthenticationService,
    private pushService: PushService
  ) {}

  ngOnInit() {
    this.pushService.obtenerUsuario();

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
    this.authService.RegisterUser(formData.email, formData.password)      
    .then((res) => {
      delete formData.password
      let uid = res.user.multiFactor['user']['uid']
      let push_id = this.pushService.userId
      if(push_id){
        formData['push_id'] = push_id
      }else{
        formData['push_id'] = null
      }

      this.fireStore.collection('usuarios').doc(uid).set(formData)
      this.authService.SendVerificationMail()
    }).catch((error) => {
      console.log(error.message)
    })
}

}
