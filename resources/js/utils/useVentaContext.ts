import { useContext } from "react"
import { VentaContext } from "./ventaContext"

export const useVentaContext = () => {
    const contexto = useContext(VentaContext)

    if (!contexto) {
        throw new Error('El componente debe estar dentro del provider')
    }

    return contexto
}
