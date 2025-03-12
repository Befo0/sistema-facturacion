import { DatosProductos, Venta } from "@/types/ProductosPagination";
import { useCallback, useState } from "react";

export const useVentaState = (estadoInicial: Venta | undefined = { productos: [], total: 0 }) => {

    const [venta, setVenta] = useState<Venta>(estadoInicial)

    const calcularSubTotal = (producto: DatosProductos) => {
        return producto.precioProducto * (producto.cantidadCompra ?? 1)
    }

    const calcularTotal = (productos: DatosProductos[]) => {
        return productos.reduce((acc, producto) => acc + calcularSubTotal(producto), 0)
    }

    const add = useCallback((nuevoProducto: DatosProductos, cantidad: number) => {
        setVenta((estadoActual) => {
            const productosActualizados = estadoActual.productos.map(item =>
                item.id === nuevoProducto.id
                    ? { ...item, cantidadCompra: (item.cantidadCompra ?? 1) + cantidad }
                    : item
            )

            if (!productosActualizados.some((item) => item.id === nuevoProducto.id)) {
                productosActualizados.push({ ...nuevoProducto, cantidadCompra: cantidad })
            }

            return { productos: productosActualizados, total: calcularTotal(productosActualizados) }
        })
    }, [])

    const remove = useCallback((idProducto: number) => {
        setVenta((estadoActual) => {
            const productosFiltrados = estadoActual.productos.filter(item => item.id !== idProducto)

            return { productos: productosFiltrados, total: calcularTotal(productosFiltrados) }
        })
    }, [])

    const removeOne = useCallback((idProducto: number) => {
        setVenta((estadoActual) => {
            const updated = estadoActual.productos.map((item) =>
                item.id === idProducto ? { ...item, cantidadCompra: (item.cantidadCompra ?? 1) - 1 }
                    : item
            ).filter(producto => (producto.cantidadCompra ?? 0) > 0)

            return {
                productos: updated, total: calcularTotal(updated)
            }

        })
    }, [])

    const clearVenta = useCallback(() => {
        setVenta({ productos: [], total: 0 })
    }, [])

    return { venta, add, remove, removeOne, clearVenta }
}
