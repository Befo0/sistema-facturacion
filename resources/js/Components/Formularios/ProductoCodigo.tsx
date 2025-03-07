import InputLabel from "../InputLabel"
import TextInput from "../TextInput"
import InputError from "../InputError"
import PrimaryButton from "../PrimaryButton"
import { useCallback, useState } from "react"
import { fetchProducts } from "@/utils/fetchProducts"
import { useVentaContext } from "@/utils/useVentaContext"

export default function ProductoCodigo() {

    const [barCode, setBarCode] = useState('')
    const [error, setError] = useState('')
    const [processing, setProcessing] = useState(false)
    const [cantidad, setCantidad] = useState(1)
    const contextoVenta = useVentaContext()

    const { add, iniciarVenta } = contextoVenta

    const updateCart = useCallback(() => {
        setProcessing(true)
        fetchProducts('api.producto', barCode)
            .then((response) => {
                const [error, productoError, producto] = response

                if (error) {
                    console.error('Error en la respuesta: ', error)
                    return
                }

                if (productoError) {
                    setError(productoError.errors.codigoBarra[0])
                    return
                }

                if (producto?.length === 0) {
                    setError('Ese producto no existe')
                    return
                }

                if (producto?.length !== 0 && producto) {
                    add(producto[0], cantidad)
                    setBarCode('')
                    setCantidad(1)
                }


            }).catch((err) => {
                console.error('Error de peticion: ', err)
            }).finally(() => {
                setProcessing(false)
            })
    }, [barCode])

    return (
        <div className="mb-0 text-center w-full flex flex-col items-center">
            <div>
                <InputLabel htmlFor="filterBarCode" className={`text-xl font-bold ${!iniciarVenta && "opacity-25"}`}>Cantidad de producto</InputLabel>
                <TextInput id="filterBarCode" value={cantidad === 1 ? '' : cantidad} disabled={!iniciarVenta} onChange={(e) => setCantidad(Number(e.target.value))} className="w-full max-w-lg text-center" />
            </div>
            <InputLabel htmlFor="filterBarCode" className={`text-xl font-bold ${!iniciarVenta && "opacity-25"}`}>Codigo de barra</InputLabel>
            <TextInput id="filterBarCode" disabled={!iniciarVenta} value={barCode} onChange={(e) => setBarCode(e.target.value)} className="w-full max-w-lg" />
            <InputError message={error} className='mt-2 font-bold' />
            <div className="mt-4 flex gap-x-6">
                <PrimaryButton onClick={updateCart} disabled={processing || !iniciarVenta} className="font-bold" >Insertar</PrimaryButton>
            </div>
        </div >
    )
}
