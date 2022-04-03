import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Producto } from '../interfaces/producto';
import { Usuario } from '../interfaces/usuario';
import { Review } from '../interfaces/review';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  getProductos(){
    return this.firestore.collection<Producto>('productos').valueChanges({idField: '_id'});
  }

  getProductoById(id){
    const productosRef = this.firestore.collection<Producto>('productos')
    return productosRef.doc(id).get();
  }


  getUsuarios(){
    return this.firestore.collection<Usuario>('usuarios').valueChanges({idField: '_id'});
  }

  getUsuarioById(id){
    const usuariosRef = this.firestore.collection<Usuario>('usuarios')
    return usuariosRef.doc(id).get();
  }

  
  getReviews(){
    return this.firestore.collection<Review>('reviews').valueChanges({idField: '_id'});
  }

  getReviewById(id){
    const reviewsRef = this.firestore.collection<Review>('reviews')
    return reviewsRef.doc(id).get();
  }


}
