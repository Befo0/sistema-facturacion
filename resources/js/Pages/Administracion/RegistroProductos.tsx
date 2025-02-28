import ProductosForm from '@/Components/Formularios/ProductosForm';
import NewLayout from '@/Layouts/NewLayout';
import { PageProps } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Toaster } from 'sonner';

export default function RegistroProductos() {

    const tiposProductos = usePage<PageProps>().props.categories

    return (
        <NewLayout>
            <Head title='Registro de productos' />

            <Toaster richColors position='top-right' />
            <ProductosForm tipos={tiposProductos} />

        </NewLayout>
    )
}
