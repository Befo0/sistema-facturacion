export interface DatosProductos {
    id: number;
    nombreProducto: string;
    codigoBarra?: string;
    distribuidor?: string;
    precioProducto: number;
    cantidadProductos?: number;
    cantidadCompra?: number;
    idTipo?: number;
}

export interface ErrorProducto {
    errors: Errors;
}

export interface Errors {
    codigoBarra: string[];
}

export interface Venta {
    productos: DatosProductos[];
    total: number;
}
