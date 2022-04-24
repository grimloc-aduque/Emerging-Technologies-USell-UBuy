export interface Producto {
    _id: string;
    nombre: string;
    descripcion: string;
    tipo: string;
    clase: string;
    precio: number;
    negociable: boolean;
    url_imagen: string;
    id_vendedor: string;
    id_comprador: string;
  }