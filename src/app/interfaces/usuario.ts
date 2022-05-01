import { Producto } from "./producto";
import { Review } from "./review";

export interface Usuario {
    uid: String;
    nombre: String;
    apellido: String;
    celular: String;
    carrera: String;
    email: String;
}
