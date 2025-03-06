import InputLabel from "../InputLabel"
import TextInput from "../TextInput"
import InputError from "../InputError"
import PrimaryButton from "../PrimaryButton"
import { VentaContext } from "@/utils/ventaContext"
import { useCallback, useContext, useState } from "react"
import { fetchProducts } from "@/utils/fetchProducts"

export default function ProductoCodigo() {

    const [barCode, setBarCode] = useState('')
    const [error, setError] = useState('')
    const contexto = useContext(VentaContext)

    if (!contexto) {
        throw new Error('El componente debe estar dentro del provider')
    }

    const { add } = contexto

    const updateCart = useCallback(() => {
        fetchProducts('api.producto', barCode)
            .then((response) => {
                const [error, productoError, producto] = response

                if (error) console.error('Error en la respuesta: ', error)

                if (productoError) {
                    setError(productoError.errors.codigoBarra[0])
                    return
                }

                if (producto) {
                    add(producto[0])
                    setBarCode('')
                }
            }).catch((err) => {
                console.error('Error de peticion: ', err)
            })

    }, [barCode])

    return (
        <div className="mb-0 text-center w-full flex flex-col items-center">
            <InputLabel htmlFor="filterBarCode" className="text-xl font-bold">Inserta codigo de barra</InputLabel>
            <TextInput id="filterBarCode" value={barCode} onChange={(e) => setBarCode(e.target.value)} className="w-full max-w-lg" />
            <InputError message={error} className='mt-2 font-bold' />
            <div className="mt-4 flex gap-x-6">
                <PrimaryButton onClick={updateCart} className="font-bold" >Insertar</PrimaryButton>
            </div>
        </div>
    )
}
