import Filter from "@/Components/Formularios/Filter"
import EditarProductos from "@/Components/Tablas/EditarProductos"
import NewLayout from "@/Layouts/NewLayout"
import { ProductosPagination } from "@/types/ProductosPagination"
import { Head } from "@inertiajs/react"

export default function ModificarProductos({ productosPaginacion }: { productosPaginacion: ProductosPagination }) {

    const productos = productosPaginacion.data || 0

    return (
        <NewLayout>
            <Head title="Editar productos" />

            <Filter />
            <EditarProductos productosArray={productos} productosLink={productosPaginacion.links} />
        </NewLayout>
    )
}
