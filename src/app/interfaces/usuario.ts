import { Producto } from "./producto";
import { Review } from "./review";

export interface Usuario {
    _id?: String;
    nombre: String;
    apellido: String;
    celular: String;
    correo: String;
    carrera: String;
    password: String;
    productos_ofertados: String[];
    productos_reservados: String[];
    reviews_comprador: String[];
    reviews_vendedor: String[];
}
