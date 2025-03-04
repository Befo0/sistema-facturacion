export interface ProductosPagination {
    current_page: number;
    data: DatosProductosPaginacion[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLinks[];
    next_page_url: null;
    path: string;
    per_page: number;
    prev_page_url: null;
    to: number;
    total: number;
}

export interface DatosProductosPaginacion {
    nombreProducto: string;
    codigoBarra?: string;
    distribuidor: string;
    precioProducto: string;
    cantidadProductos: number;
}

export interface PaginationLinks {
    url: null | string;
    label: string;
    active: boolean;
}

