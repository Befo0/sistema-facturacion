import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '../PrimaryButton';
import { useForm, usePage } from '@inertiajs/react';
import InputError from '../InputError';
import { toast } from 'sonner';
import { PageProps } from '@/types';

export default function ProductosForm({ barCode }: { barCode: string }) {

    const tipos = usePage<PageProps>().props.categories || []

    const { data, setData, post, errors, processing, reset } = useForm({
        name: '',
        type: 0,
        barcode: barCode,
        price: 0,
        quantity: 0,
        distributor: '',
    })

    console.log(data)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        post(route('productos.guardar'), {
            onSuccess: () => {
                reset()
                toast.success('El producto se ha registrado correctamente')
            },
            onError: () => {
                toast.error('Ha ocurrido un error al registrar el producto')
            },
        })

    }

    return (
        <div className="max-w-6xl mx-auto bg-white p-10 rounded-lg shadow-lg mt-10 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Registrar Producto</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                <div>
                    <InputLabel htmlFor="name" value="Nombre del Producto" className="text-gray-700" />
                    <TextInput
                        id="name"
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                    <InputError message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="type" value="Tipo" className="text-gray-700" />
                    <select
                        id="type"
                        value={data.type || 0}
                        onChange={(e) => setData('type', Number(e.target.value))}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">Seleccione un tipo</option>
                        {
                            tipos.map(tipo => (
                                <option key={tipo.id} value={tipo.id}>
                                    {tipo.nombreTipo}
                                </option>
                            ))
                        }
                    </select>
                    <InputError message={errors.type} />
                </div>

                <div>
                    <InputLabel htmlFor="barcode" value="Código de Barras" className="text-gray-700" />
                    <TextInput
                        id="barcode"
                        type="text"
                        value={data.barcode}
                        onChange={(e) => setData('barcode', e.target.value)}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                    <InputError message={errors.barcode} />
                </div>

                <div>
                    <InputLabel htmlFor="price" value="Precio" className="text-gray-700" />
                    <TextInput
                        id="price"
                        type="number"
                        value={data.price}
                        onChange={(e) => setData('price', Number(e.target.value))}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                    <InputError message={errors.quantity} />
                </div>

                <div>
                    <InputLabel htmlFor="quantity" value="Cantidad" className="text-gray-700" />
                    <TextInput
                        id="quantity"
                        type="number"
                        value={data.quantity}
                        onChange={(e) => setData('quantity', Number(e.target.value))}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                    <InputError message={errors.quantity} />
                </div>

                <div className="text-gray-700">
                    <InputLabel htmlFor="distributor" value="Distribuidora" className="text-gray-700" />
                    <TextInput
                        id="distributor"
                        type="text"
                        value={data.distributor}
                        onChange={(e) => setData('distributor', e.target.value)}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                    <InputError message={errors.distributor} />
                </div>

                <div className="col-span-2 flex justify-end">
                    <PrimaryButton type='submit' disabled={processing}>
                        Registrar producto
                    </PrimaryButton>
                </div>
            </form >
        </div >
    )
}
