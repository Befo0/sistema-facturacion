import { Link } from "@inertiajs/react";

export default function TablaUsuarios() {


    return (
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-6">
            <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-4 text-left text-gray-600">Nombre del producto</th>
                        <th className="p-4 text-left text-gray-600">Distribuidor</th>
                        <th className="p-4 text-center text-gray-600">Cantidad</th>
                        <th className="p-4 text-right text-gray-600">Precio</th>
                        <th className="p-4 text-center text-gray-600">Inspeccionar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t hover:bg-gray-50">
                        <td className="p-4"></td>
                        <td className="p-4"></td>
                        <td className="p-4 text-center"></td>
                        <td className="p-4 text-right">$ </td>
                        <td className="p-4 text-center">
                            <Link href="" className="px-3 py-2 bg-blue-600 text-white font-bold rounded-md text-sm hover:bg-blue-700">
                                Inspeccionar
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
