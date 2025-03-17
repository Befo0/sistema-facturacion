import { DatosProductos } from "@/types/ProductosPagination"
import { useModal } from "./useModal"
import { useVentaContext } from "./useVentaContext"
import { useForm } from "@inertiajs/react"
import { useCallback, useEffect } from "react"
import { toast } from "sonner"

interface FormData {
    producto: DatosProductos[]
    total: number
    [key: string]: any
}

export const payCart = () => {
    const { isModalOpen, closeModal, openModal } = useModal()
    const contextoVenta = useVentaContext()
    const { venta, setIniciarVenta, clearVenta } = contextoVenta
    const { setData, post, processing } = useForm<FormData>({
        producto: venta.productos,
        total: venta.total
    })

    useEffect(() => {
        setData('producto', venta.productos)
        setData('total', venta.total)
    }, [venta])

    const startTransaction = () => {
        openModal()
        setTimeout(() => {
            closeModal()
            submit()
        }, 5000)
    }


    const submit = useCallback(() => {
        post(route('venta.crear'), {
            onSuccess: () => {
                setIniciarVenta(false)
                clearVenta()
                toast.success('La venta se ha registrado correctamente')
            },
            onError: (e) => {
                toast.error('Ocurrio un error al registrar la venta')
                console.log('Error: ', e)
            }
        })
    }, [setData, post, processing, venta.productos, venta.total, setIniciarVenta, clearVenta])

    return { isModalOpen, openModal, startTransaction, closeModal }
}
