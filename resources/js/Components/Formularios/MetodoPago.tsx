import { useVentaContext } from "@/utils/useVentaContext"
import PrimaryButton from "../PrimaryButton"
import SecondaryButton from "../SecondaryButton"
import { useForm } from "@inertiajs/react"
import { DatosProductos } from "@/types/ProductosPagination"
import { toast } from "sonner"
import { Toaster } from "sonner"
import { useCallback, useEffect } from "react"

interface FormData {
    producto: DatosProductos[]
    total: number
    [key: string]: any
}

export default function MetodoPago() {

    const contextoVenta = useVentaContext()
    const { venta, iniciarVenta, setIniciarVenta, clearVenta } = contextoVenta
    const { setData, post, processing } = useForm<FormData>({
        producto: venta.productos,
        total: venta.total
    })

    useEffect(() => {
        setData('producto', venta.productos)
        setData('total', venta.total)
    }, [venta])

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault()
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

    return (
        <div>
            <Toaster richColors position="top-right" />
            {
                !iniciarVenta
                    ?
                    <div className="w-full h-full flex items-center justify-center">
                        <PrimaryButton
                            className="text-5xl px-10 py-8 shadow-md font-bold"
                            onClick={() => setIniciarVenta(true)}
                        >
                            Iniciar Venta
                        </PrimaryButton>
                    </div>
                    :
                    <div>
                        <form onSubmit={handleSubmit} className="w-full h-full flex items-center justify-center mb-0">
                            <SecondaryButton type="submit" disabled={processing}>
                                Terminar Venta
                            </SecondaryButton>
                        </form>
                    </div>
            }
        </div>
    )
}
