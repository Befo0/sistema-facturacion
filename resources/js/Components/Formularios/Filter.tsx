import { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import InputError from "../InputError";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import { PageProps } from "@/types";

export default function Filter() {

    const tipoProductos = usePage<PageProps>().props.categories

    const { data, setData, get, errors, reset } = useForm({
        tipoProducto: 0
    })

    const [filter, setFilter] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        get(route('editar.productos'), {
            onSuccess: () => {
                reset()
                setFilter(false);
            }
        })
    }

    return (
        <div className="max-w-6xl mx-auto my-6 p-6 bg-white rounded-lg shadow-md">
            {filter ? (
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-y-4">
                    <select
                        className="w-full max-w-md p-2 border rounded-md focus:ring focus:ring-blue-300"
                        value={data.tipoProducto || 0}
                        onChange={(e) => setData('tipoProducto', Number(e.target.value))}
                    >
                        <option value="0" disabled>Seleccionar</option>
                        {tipoProductos.map(tipo => (
                            <option key={tipo.id} value={tipo.id}>{tipo.nombreTipo}</option>
                        ))}
                        <option value={tipoProductos.length + 1}>Mostrar todos</option>
                    </select>
                    <InputError message={errors.tipoProducto} className="text-red-500 text-sm" />
                    <div className="flex gap-4">
                        <PrimaryButton type="submit">Filtrar</PrimaryButton>
                        <SecondaryButton type="button" onClick={() => setFilter(false)}>Cancelar</SecondaryButton>
                    </div>
                </form>
            ) : (
                <div className="text-center">
                    <p className="mb-2 text-gray-700 font-medium">Filtrar por tipo de productos</p>
                    <PrimaryButton type="button" onClick={() => setFilter(true)}>Filtrar</PrimaryButton>
                </div>
            )}
        </div>
    )
}
