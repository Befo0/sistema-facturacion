import { DatosProductos, Venta } from "@/types/ProductosPagination";
import { createContext } from "react";

interface contextTypes {
    venta: Venta;
    add: (nuevoProducto: DatosProductos, cantidad: number) => void;
    remove: (idProducto: number) => void;
    removeOne: (idProducto: number) => void;
    iniciarVenta: boolean;
    setIniciarVenta: React.Dispatch<React.SetStateAction<boolean>>;
}

export const VentaContext = createContext<contextTypes | undefined>(undefined)
