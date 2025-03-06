import { DatosProductos } from "@/types/ProductosPagination";
import { createContext } from "react";

interface contextTypes {
    venta: DatosProductos[];
    add: (nuevoProducto: DatosProductos) => void;
    remove: (index: number) => void;
}

export const VentaContext = createContext<contextTypes | undefined>(undefined)
