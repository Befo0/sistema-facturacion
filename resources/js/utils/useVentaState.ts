import { DatosProductos } from "@/types/ProductosPagination";
import { useState } from "react";


export const useVentaState = (estadoInicial: DatosProductos[] = []) => {

    const [venta, setVenta] = useState(estadoInicial)

    const add = (nuevoProducto: DatosProductos, cantidad: number) => {
        setVenta((estadoActual) => {
            const productoExistente = estadoActual.find((item) => item.id === nuevoProducto.id)

            if (productoExistente) {
                return estadoActual.map((item) =>
                    item.id === nuevoProducto.id
                        ? { ...item, cantidadCompra: (item.cantidadCompra ?? 1) + cantidad }
                        : item
                )
            }

            return [...estadoActual, { ...nuevoProducto, cantidadCompra: cantidad }]
        })
    }

    const remove = (idProducto: number) => {
        setVenta((estadoActual) => {
            const estado = [...estadoActual]
            const nuevoEstado = estado.filter((producto) => producto.id !== idProducto)
            return nuevoEstado
        })
    }

    const removeOne = (idProducto: number) => {
        setVenta((estadoActual) => {
            const updated = estadoActual.map((item) =>
                item.id === idProducto ? { ...item, cantidadCompra: (item.cantidadCompra ?? 1) - 1 }
                    : item
            )

            return updated.filter(producto => (producto.cantidadCompra ?? 0) > 0)
        })
    }

    return { venta, add, remove, removeOne }
}
