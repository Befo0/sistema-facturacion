import MetodoPago from "@/Components/Formularios/MetodoPago";
import ProductoCodigo from "@/Components/Formularios/ProductoCodigo";
import TablaProductos from "@/Components/Tablas/TablaProductos";
import NewLayout from "@/Layouts/NewLayout";
import { useVentaState } from "@/utils/useVentaState";
import { VentaContext } from "@/utils/ventaContext";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Caja() {

    const { venta, add, remove, removeOne, clearVenta } = useVentaState()
    const [iniciarVenta, setIniciarVenta] = useState(false)

    return (
        <NewLayout>
            <Head title='Caja' />

            <VentaContext.Provider value={{ venta, add, remove, removeOne, iniciarVenta, setIniciarVenta, clearVenta }}>
                <div className="grid grid-cols-4 grid-rows-6 gap-4 h-full">
                    <div className="col-span-2 row-span-3 col-start-3 row-start-1 p-6 bg-white rounded-lg shadow-md flex items-center justify-center">
                        <ProductoCodigo />
                    </div>
                    <div className="col-span-2 row-span-3 col-start-3 row-start-4 p-6 bg-white rounded-lg shadow-md">
                        <MetodoPago />
                    </div>
                    <div className="col-span-2 row-span-6 col-start-1 row-start-1 p-6 bg-white rounded-lg shadow-md">
                        <TablaProductos />
                    </div>
                </div>
            </VentaContext.Provider>
        </NewLayout >
    )
}
