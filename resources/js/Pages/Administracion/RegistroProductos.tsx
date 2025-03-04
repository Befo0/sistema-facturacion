import ProductosForm from '@/Components/Formularios/ProductosForm';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import NewLayout from '@/Layouts/NewLayout';
import { DatosProductosPaginacion } from '@/types/ProductosPagination';
import { Head } from '@inertiajs/react';
import { useCallback, useState } from 'react';
import { Toaster } from 'sonner';

export default function RegistroProductos({ productoRegistrado }: { productoRegistrado: DatosProductosPaginacion[] }) {

    const [data, setData] = useState({
        barCode: ''
    })

    const [searched, setSearched] = useState({
        showForm: false,
        searched: false
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSearched({ showForm: false, searched: true })
        searchProducto()
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            barCode: e.target.value
        });
    };

    const searchProducto = useCallback(() => {
        fetch(route('api.producto', { codigoBarra: data.barCode }))
            .then((res) => {
                console.log(res)
                if (!res.ok) {
                    throw new Error(`Hubo un error al realizar la petición: ${res.statusText}`)
                }
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setSearched({ showForm: true, searched: false })
            })
            .catch((err) => {
                console.error(err)
            })
    }, [data.barCode])

    return (
        <NewLayout>
            <Head title='Registro de productos' />

            <Toaster richColors position='top-right' />
            <div className="max-w-6xl mx-auto my-6 p-6 bg-white rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="mb-0 text-center flex flex-col items-center">
                    <InputLabel htmlFor="filterBarCode" className="text-xl font-bold">Inserta codigo de barra</InputLabel>
                    <TextInput id="filterBarCode" value={data.barCode} onChange={handleInputChange} className="w-full max-w-lg" />
                    <div className="mt-4">
                        <PrimaryButton className="font-bold" type="submit">Filtrar</PrimaryButton>
                    </div>
                </form>
            </div>
            {
                searched.showForm && productoRegistrado.length === 0
                &&
                <ProductosForm barCode={data.barCode} />
            }
        </NewLayout>
    )
}
