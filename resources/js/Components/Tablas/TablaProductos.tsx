import { DeleteIcon, ReduceCart } from "../Icons"
import { useVentaContext } from "@/utils/useVentaContext"

export default function TablaProductos() {

    const contextoVenta = useVentaContext()
    const { venta, remove, removeOne } = contextoVenta

    const removeFromCart = (idProducto: number) => {
        remove(idProducto)
    }

    const removeOneFromCart = (idProducto: number) => {
        removeOne(idProducto)
    }

    return (
        < div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden" >
            {
                venta.productos.length > 0
                &&
                <div className="max-h-[70vh] overflow-y-auto">
                    <table className="w-full border-collapse">
                        <thead className="bg-gray-100 sticky top-0 z-10" >
                            <tr>
                                <th className="p-4 text-left text-gray-600">Producto</th>
                                <th className="p-4 text-left text-gray-600">Precio</th>
                                <th className="p-4 text-left text-gray-600">Descuento %</th>
                                <th className="p-4 text-left text-gray-600">Cantidad</th>
                                <th className="p-4 text-left text-gray-600">SubTotal</th>
                                <th className="p-4 text-left text-gray-600"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                venta.productos.map(producto => (
                                    <tr key={producto.id} className="border-t">
                                        <td className="p-4">{producto.nombreProducto}</td>
                                        <td className="p-4">$ {producto.precioProducto}</td>
                                        <td className="p-4"></td>
                                        <td className="p-4" >
                                            {producto.cantidadCompra}
                                        </td>
                                        <td className="p-4">
                                            $ {producto.precioProducto * (producto.cantidadCompra ?? 1)}
                                        </td>
                                        <td className="p-4 flex justify-between items-center">
                                            <button onClick={() => removeOneFromCart(producto.id)}>
                                                <ReduceCart />
                                            </button>
                                            <button onClick={() => removeFromCart(producto.id)} >
                                                <DeleteIcon />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody >
                    </table >
                    <div className="mt-4 p-4 bg-gray-50 rounded-b-lg shadow-inner text-right">
                        <strong>Total: $ {venta.total.toFixed(2)}</strong>
                    </div>
                </div>
            }
        </div >
    )
}
