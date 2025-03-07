import { useVentaContext } from "@/utils/useVentaContext"
import PrimaryButton from "../PrimaryButton"

export default function MetodoPago() {
    const contextoVenta = useVentaContext()
    const { iniciarVenta, setIniciarVenta } = contextoVenta

    return (
        <div>
            {
                !iniciarVenta
                    ?
                    <div className="w-full h-full flex items-center justify-center">
                        <PrimaryButton
                            className="text-4xl px-10 py-8 shadow-md"
                            onClick={() => setIniciarVenta(true)}
                        >
                            Iniciar Venta
                        </PrimaryButton>
                    </div>
                    :
                    <div className="w-full h-full flex items-center justify-center">
                        Hola
                    </div>
            }
        </div>
    )
}
