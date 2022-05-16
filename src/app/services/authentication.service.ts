import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';
import {
  AngularFirestore,
} from '@angular/fire/compat/firestore';
import { PushService } from './push.service';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {
  userSession = null;
  sessionId: string;
  isEmailVerified: boolean;

  constructor(
    public router: Router,
    public ngZone: NgZone,
    public alertController: AlertController,
    private pushService: PushService,
    public fireAuth: AngularFireAuth,
    private fireStore: AngularFirestore
  ) {
    this.fireAuth.authState.subscribe((user) => {
      if (user) {
        console.log('Auth State Change')
        this.userSession = user;
        this.sessionId = user.uid
        this.isEmailVerified = user.emailVerified
      }
    });
  }

  // Register user with email/password
  RegisterUser(userForm) {
    this.pushService.obtenerUsuario();
    this.fireAuth.createUserWithEmailAndPassword(userForm.email, userForm.password).then((res) => {
      delete userForm.password
      let uid = res.user.multiFactor['user']['uid']
      let push_id = this.pushService.userId
      if(push_id){
        userForm['push_id'] = push_id
      }else{
        userForm['push_id'] = null
      }
      this.fireStore.collection('usuarios').doc(uid).set(userForm);
      this.SendVerificationMail();
    }).catch((error) => {
      console.log(error.message)
    });
  }

  // Email verification when new user register
  SendVerificationMail() {
    this.fireAuth.currentUser.then((user) => {
      user.sendEmailVerification().then(async() => {
        this.showEmailSentAlert()
      });
    });
  }

  // Login in with email/password
  SignIn(email, password) {
    this.fireAuth.signInWithEmailAndPassword(email, password)
      .then(async (res) => {
        const user = res.user;
        if(user) {
          this.userSession = user;
          this.sessionId = user.uid;
          this.isEmailVerified = user.emailVerified
          if(this.isEmailVerified){
            this.router.navigate(['busqueda']);  
          }
          else {
            this.showNotVerifiedAlert();
          }
        }else{
          this.showInvalidCredentialsAlert();
        }
      })
      .catch(async (error) => {
        this.showInvalidCredentialsAlert();
        console.log(error.message);
      });
  }

  // Sign-out
  SignOut() {
    return this.fireAuth.signOut().then(() => {
      this.router.navigate(['inicio']);
    });
  }

  // Alerts

  async showEmailSentAlert(){
    const alert = await this.alertController.create({
      header: 'Valide su cuenta',
      message: 'Se envio un email para validar su cuenta',
      buttons: [{
        text: 'OK',
        role: 'cancel',
        handler: () => {
          this.router.navigate(['inicio']);
        }
      }]
    });
    alert.present();
  }

  async showNotVerifiedAlert(){
    const alert = await this.alertController.create({
      header: 'Cuenta no verificada',
      message: 'Revise en su correo electronico el mail de verificacion de cuenta',
      buttons: ['OK']
    });
    await alert.present();
  }

  async showInvalidCredentialsAlert(){
    const alert = await this.alertController.create({
      header: 'Cuenta no valida',
      message: 'Email o contraseña incorrectos',
      buttons: ['OK']
    });
    await alert.present();

  }

}