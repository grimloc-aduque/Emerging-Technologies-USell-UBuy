import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { DataService } from 'src/app/services/data.service';

// Forms
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {Router} from "@angular/router"
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-crear-editar-producto',
  templateUrl: './crear-editar-producto.page.html',
  styleUrls: ['./crear-editar-producto.page.scss'],
})
export class CrearEditarProductoPage implements OnInit {

  private id_sesion = this.authService.sessionId
  private editing: Boolean;
  productForm: FormGroup;

  
  id_producto: String;
  producto: Producto ={
    uid: '',
    nombre: '',
    descripcion: '',
    tipo: '',
    clase: '',
    precio: 0,
    negociable: true,
    url_imagen: '',
    id_vendedor: '',
    id_comprador: ''
  }


  constructor(
    private route: ActivatedRoute, 
    private dataService: DataService,
    private formBuilder: FormBuilder, 
    private fireStore: AngularFirestore, 
    private router: Router,
    private authService: AuthenticationService
  ) {}


  ngOnInit() {
    this.productForm = this.formBuilder.group({
      nombre: '',
      descripcion: '',
      tipo: '',
      clase: '',
      precio: 0,
      negociable: false,
    })


    this.recuperarIdProducto();
  }


  recuperarIdProducto(){
    this.route.paramMap.subscribe(
      params => {
        if(params.get('id_producto')){
          this.editing = true
          this.id_producto = params.get('id_producto');
          this.getProducto();
        }
          
      }
    )
  }

  getProducto(){
    this.dataService.getProductoById(this.id_producto).subscribe(
      result => {
        this.producto = result.data();
      }
    )
  }


  onsubmitProductForm(){
    if(this.editing){
      this.updateProduct();
    }
    else{
      this.createProduct();
    }
  }

  updateProduct(){
    const formData = this.productForm.value;
    formData['url_imagen'] = this.producto.url_imagen
    formData['id_vendedor'] = this.producto.id_vendedor
    formData['id_comprador'] = this.producto.id_comprador

    this.dataService.update('productos', this.id_producto, formData);
    this.router.navigateByUrl('/mis-productos');
  }

  createProduct(){
    const formData = this.productForm.value;
    formData['url_imagen'] = 'https://1.bp.blogspot.com/-6MTxuinGnq4/YAdpsbm-azI/AAAAAAAANp8/V939GxHEYYM1Nm9NByaGT-obPoO8WhJbACLcBGAsYHQ/s1022/calculo-de-una-variable-trascendentes-tempranas-7ma-edicion-james-stewart-freelibros.jpg'
    formData['id_vendedor'] = this.id_sesion
    formData['id_comprador'] = null
    this.fireStore.collection('productos').add(formData).then(
        res => {
          console.log(res);
          this.router.navigate(['/mis-productos']);
        }
      )
  }

}
