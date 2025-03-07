import { DatosProductos } from "@/types/ProductosPagination";
import { useState } from "react";


export const useVentaState = (estadoInicial: DatosProductos[] = []) => {

    const [venta, setVenta] = useState(estadoInicial)

    const add = (nuevoProducto: DatosProductos) => {
        setVenta((estadoActual) => {
            const productoExistente = estadoActual.find((item) => item.id === nuevoProducto.id)

            if (productoExistente) {
                return estadoActual.map((item) =>
                    item.id === nuevoProducto.id
                        ? { ...item, cantidadCompra: (item.cantidadCompra ?? 0) + 1 }
                        : item
                )
            }

            return [...estadoActual, { ...nuevoProducto, cantidadCompra: 1 }]
        })
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
