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
        < div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-auto " >
            {
                venta.length > 0
                &&
                <table className="w-full border-collapse">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-4 text-left text-gray-600">Producto</th>
                            <th className="p-4 text-left text-gray-600">Precio</th>
                            <th className="p-4 text-left text-gray-600">Descuento %</th>
                            <th className="p-4 text-left text-gray-600">Cantidad</th>
                            <th className="p-4 text-left text-gray-600"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            venta.map(producto => (
                                <tr key={producto.id} className="border-t">
                                    <td className="p-4">{producto.nombreProducto}</td>
                                    <td className="p-4">$ {producto.precioProducto}</td>
                                    <td className="p-4"></td>
                                    <td className="p-4" >
                                        {producto.cantidadCompra}
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
            }
        </div >
    )
}
