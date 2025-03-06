import { DatosProductos, ErrorProducto } from "@/types/ProductosPagination"

export const fetchProducts = async (routeName: string, barCode: string): Promise<[Error?, ErrorProducto?, DatosProductos[]?]> => {
    try {
        const res = await fetch(route(routeName, { codigoBarra: barCode }))

        if (!res.ok) return [new Error(`Hubo un error al realizar la petición: ${res.statusText}`)]

        const data = await res.json()

        if (data.errors) return [undefined, data]

        return [undefined, undefined, data]

    } catch (err) {
        if (err instanceof Error) return [err]
    }

    return [new Error('Error desconocido')]
}

