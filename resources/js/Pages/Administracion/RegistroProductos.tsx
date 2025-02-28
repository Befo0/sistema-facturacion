import ProductosForm from '@/Components/Formularios/ProductosForm';
import NewLayout from '@/Layouts/NewLayout';
import { opcionesTipos } from '@/types/productos';
import { Head } from '@inertiajs/react';
import { Toaster } from 'sonner';

export default function RegistroProductos({ tiposProductos }: { tiposProductos: opcionesTipos }) {

    return (
        <NewLayout>
            <Head title='Registro de productos' />

            <Toaster richColors position='top-right' />
            <ProductosForm tipos={tiposProductos} />

        </NewLayout>
    )
}
