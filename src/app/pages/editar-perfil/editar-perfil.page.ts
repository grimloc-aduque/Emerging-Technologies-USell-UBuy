import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {Router} from "@angular/router"
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  private id_sesion = 'Jla5t7VTwHQ7iRczUBFB'
  perfil: Usuario;

  editPerfilForm: FormGroup;

  constructor(
    private dataService: DataService, 
    private route: ActivatedRoute,
    private formBuilder: FormBuilder, 
    private fireStore: AngularFirestore, 
    private router: Router
    ) { }

  ngOnInit() {
    this.editPerfilForm = this.formBuilder.group({
      nombre: '',
      apellido: '',
      celular: '',
      carrera: '',

      correo: '',
      password: '',
      productos_ofertados: [],
      productos_reservados: [],
      reviews_comprador: [],
      reviews_vendedor: [],
    }); 

    this.dataService.getUsuarioById(this.id_sesion).subscribe(
      result => {
        this.perfil = result.data();
        this.editPerfilForm.get('nombre').setValue(this.perfil.nombre);
        this.editPerfilForm.get('apellido').setValue(this.perfil.apellido);
        this.editPerfilForm.get('celular').setValue(this.perfil.celular);
        this.editPerfilForm.get('carrera').setValue(this.perfil.carrera);

        this.editPerfilForm.get('correo').setValue(this.perfil.correo);
        this.editPerfilForm.get('password').setValue(this.perfil.password);
        this.editPerfilForm.get('productos_ofertados').setValue(this.perfil.productos_ofertados);
        this.editPerfilForm.get('productos_reservados').setValue(this.perfil.productos_reservados);
        this.editPerfilForm.get('reviews_comprador').setValue(this.perfil.reviews_comprador);
        this.editPerfilForm.get('reviews_vendedor').setValue(this.perfil.reviews_vendedor);

        console.log('perfil: ', this.perfil);
      }
    )
  }

  editPerfil(){
    const formData = this.editPerfilForm.value;

    this.dataService.update('usuarios', this.id_sesion, formData)
    .then(res=>{
      this.router.navigate(['/mi-perfil']).then(() => {
        location.reload();
      })
    })
    .catch (err=>{
      console.log("error", err)
    })

    console.log('perfilEditado', formData);
  }
}
