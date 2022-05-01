import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Producto } from '../interfaces/producto';
import { Usuario } from '../interfaces/usuario';
import { Review } from '../interfaces/review';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  productosRef = this.firestore.collection<Producto>('productos');
  usuariosRef = this.firestore.collection<Usuario>('usuarios');
  reviewsRef = this.firestore.collection<Review>('reviews');


  constructor(
    private http: HttpClient, 
    private firestore: AngularFirestore, 
    private authService: AuthenticationService) { }

  getProductos(){
    return this.productosRef.valueChanges({idField: 'uid'});
  }

  getProductoById(id){
    return this.productosRef.doc(id).get();
  }

  getUsuarios(){
    return this.usuariosRef.valueChanges({idField: 'uid'});
  }

  getUsuarioById(id){
    return this.usuariosRef.doc(id).get();
  }

  getReviews(){
    return this.reviewsRef.valueChanges({idField: 'uid'});
  }

  getReviewById(id){
    return this.reviewsRef.doc(id).get();
  }

  update(collection, id, dato){
      this.firestore.collection(collection).doc(id).set(dato);
  }


  deleteProductoVendedor(producto: Producto){
    this.productosRef.doc(producto.uid).delete();
  }

  deleteProductoComprador(producto: Producto){
    this.update('productos',  producto.uid, producto)
  }

  reservarProducto(producto:Producto){
    const id_sesion = this.authService.sessionId
    producto.id_comprador = id_sesion
    this.update('productos', producto.uid, producto);
  }
}
