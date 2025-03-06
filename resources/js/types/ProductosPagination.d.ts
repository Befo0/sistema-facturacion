export interface DatosProductos {
    id: number;
    nombreProducto: string;
    codigoBarra?: string;
    distribuidor: string;
    precioProducto: string;
    cantidadProductos: number;
    idTipo?: number;
}

export interface ErrorProducto {
    errors: Errors;
}

export interface Errors {
    codigoBarra: string[];
}
