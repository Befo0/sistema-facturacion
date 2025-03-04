import Filter from "@/Components/Formularios/Filter"
import EditarProductos from "@/Components/Tablas/EditarProductos"
import NewLayout from "@/Layouts/NewLayout"
import { Head } from "@inertiajs/react"

export default function ModificarProductos() {

    return (
        <NewLayout>
            <Head title="Editar productos" />

            <Filter />
            <EditarProductos productosArray={productos} productosLink={productosPaginacion.links} />
        </NewLayout>
    )
}
