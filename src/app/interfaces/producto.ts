export interface Producto {
    _id: String;
    nombre: String;
    descripcion: String;
    tipo: String;
    clase: String;
    precio: Number;
    negociable: Boolean;
    url_imagen: String;
    id_vendedor: String;
    id_comprador: String;
  }