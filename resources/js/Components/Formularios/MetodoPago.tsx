import { useVentaContext } from "@/utils/useVentaContext"
import PrimaryButton from "../PrimaryButton"
import SecondaryButton from "../SecondaryButton"
import { useCallback, useState } from "react"

export default function MetodoPago() {

    const contextoVenta = useVentaContext()
    const { venta, iniciarVenta, setIniciarVenta } = contextoVenta
    const [processing, setProcessing] = useState(false)

    const handleSubmit = useCallback(async () => {
        const response = await fetch(route('venta.crear'), {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
            },
            body: JSON.stringify(venta)
        })

        console.log(response)
    }, [processing])

    return (
        <div>
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
                    <form onSubmit={handleSubmit} className="w-full h-full flex items-center justify-center">
                        <SecondaryButton type="submit" onClick={() => setProcessing(true)} disabled={processing}>
                            Terminar Venta
                        </SecondaryButton>
                    </form>
            }
        </div>
    )
}
