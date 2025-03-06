import { DatosProductos } from "@/types/ProductosPagination";
import { useState } from "react";


export const useVentaState = (estadoInicial: DatosProductos[] = []) => {

    const [venta, setVenta] = useState(estadoInicial)

    const add = (nuevoProducto: DatosProductos) => {
        setVenta((estadoActual) => [...estadoActual, nuevoProducto])
    }

    const remove = (index: number) => {
        setVenta((estadoActual) => {
            const nuevoEstado = [...estadoActual]
            nuevoEstado.splice(index, 1)
            return nuevoEstado
        })
    }

    return { venta, add, remove }
}
