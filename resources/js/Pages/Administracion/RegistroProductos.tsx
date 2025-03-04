import EditarProductos from '@/Components/Formularios/EditarProductos';
import ProductosForm from '@/Components/Formularios/ProductosForm';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import NewLayout from '@/Layouts/NewLayout';
import { DatosProductos } from '@/types/ProductosPagination';
import { Head } from '@inertiajs/react';
import { useCallback, useState } from 'react';
import { Toaster } from 'sonner';

export default function RegistroProductos() {

    const [barCode, setBarcode] = useState('')
    const [showForm, setShowform] = useState(false)
    const [producto, setProducto] = useState<DatosProductos[]>([])
    const [error, setError] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        searchProducto()
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBarcode(e.target.value)
    };

    const searchProducto = useCallback(() => {
        fetch(route('api.producto', { codigoBarra: barCode }))
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Hubo un error al realizar la petición: ${res.statusText}`)
                }
                return res.json()
            })
            .then((data) => {
                if (data.errors) {
                    setError(data.errors.codigoBarra[0])
                    return
                }
                setProducto(data)
                setShowform(true)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [barCode])

    return (
        <NewLayout>
            <Head title='Registro de productos' />

            <Toaster richColors position='top-right' />
            <div className="max-w-6xl mx-auto my-6 p-6 bg-white rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="mb-0 text-center flex flex-col items-center">
                    <InputLabel htmlFor="filterBarCode" className="text-xl font-bold">Inserta codigo de barra</InputLabel>
                    <TextInput id="filterBarCode" value={barCode} onChange={handleInputChange} className="w-full max-w-lg" />
                    <InputError message={error} className='mt-2 font-bold' />
                    <div className="mt-4">
                        <PrimaryButton className="font-bold" type="submit">Filtrar</PrimaryButton>
                    </div>
                </form>
            </div>
            {
                showForm && producto.length === 0
                &&
                <ProductosForm barCode={barCode} />
            }
            {
                showForm && producto.length !== 0
                &&
                <EditarProductos producto={producto} />
            }
        </NewLayout>
    )
}
