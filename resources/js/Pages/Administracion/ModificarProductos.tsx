import Filter from "@/Components/Formularios/Filter"
import NewLayout from "@/Layouts/NewLayout"
import { Head } from "@inertiajs/react"

export default function ModificarProductos() {

    return (
        <NewLayout>
            <Head title="Editar productos" />

            <Filter />
        </NewLayout>
    )
}
