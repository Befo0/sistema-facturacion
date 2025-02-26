import ProductosForm from '@/Components/Formularios/ProductosForm';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { opcionesTipos } from '@/types/productos';
import { Head } from '@inertiajs/react';

export default function RegistroProductos({ tiposProductos }: { tiposProductos: opcionesTipos }) {

    return (
        <AuthenticatedLayout>
            <Head title='Registro de productos' />

            <ProductosForm tipos={tiposProductos} />

        </AuthenticatedLayout>
    )
}
