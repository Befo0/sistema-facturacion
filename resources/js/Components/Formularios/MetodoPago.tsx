import PrimaryButton from "../PrimaryButton"
import SecondaryButton from "../SecondaryButton"
import { Toaster } from "sonner"
import DangerButton from "../DangerButton"
import CardPayment from "../CardPayment"
import CashPayment from "../CashPayment"
import { useVentaContext } from "@/utils/useVentaContext"

export default function MetodoPago() {

    const contextoVenta = useVentaContext()
    const { iniciarVenta, setIniciarVenta, clearVenta } = contextoVenta

    const cancel = () => {
        setIniciarVenta(false)
        clearVenta()
    }

    return (
        <div className="flex justify-center items-center size-full">
            <Toaster richColors position="top-right" />
            {
                !iniciarVenta
                    ?
                    <div className="size-full flex items-center justify-center">
                        <PrimaryButton
                            className="text-5xl px-10 py-8 shadow-md font-bold"
                            onClick={() => setIniciarVenta(true)}
                        >
                            Iniciar Venta
                        </PrimaryButton>
                    </div>
                    :

                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        <div className="size-full flex items-center justify-center mb-0">
                            <SecondaryButton >
                                Reiniciar Venta
                            </SecondaryButton>
                        </div>
                        <div className="size-full flex items-center justify-center">
                            <DangerButton onClick={cancel}>
                                Cancelar Venta
                            </DangerButton>
                        </div>
                        <div className="size-full flex items-center justify-center">
                            <CardPayment />
                        </div>
                        <div className="size-full flex items-center justify-center">
                            <CashPayment />
                        </div>
                    </div>
            }
        </div>
    )
}
