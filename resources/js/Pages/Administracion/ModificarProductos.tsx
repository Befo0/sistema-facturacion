import EditarProductos from "@/Components/Tablas/EditarProductos"
import NewLayout from "@/Layouts/NewLayout"
import { Head } from "@inertiajs/react"

export default function ModificarProductos() {
    return (
        <NewLayout>
            <Head title="Editar productos" />

            <EditarProductos />
        </NewLayout>
    )
}
