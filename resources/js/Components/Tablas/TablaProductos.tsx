import { VentaContext } from "@/utils/ventaContext"
import { useContext } from "react"

export default function TablaProductos() {

    const contexto = useContext(VentaContext)

    if (!contexto) {
        throw new Error('El componente debe estar dentro del provider')
    }

    const { venta } = contexto

    return (
        <div>
        </div>
    )
}
