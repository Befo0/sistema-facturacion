import { PaginationLinks } from "@/types/ProductosPagination";
import { Link } from "@inertiajs/react";

export default function Pagination({ links }: { links: PaginationLinks[] }) {
    return (
        links.length > 3 && (
            <div className="max-w-6xl mx-auto bg-white rounded-lg p-4 shadow-md mt-6">
                <div className="flex flex-wrap justify-center gap-2">
                    {links.map((link, index) => (
                        link.url === null ? (
                            <span key={index} className="px-4 py-2 text-gray-400 border rounded">{link.label}</span>
                        ) : (
                            <Link
                                key={index}
                                href={link.url}
                                className={`px-4 py-2 border rounded hover:bg-gray-100 ${link.active ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
                            >
                                {link.label}
                            </Link>
                        )
                    ))}
                </div>
            </div>
        )
    )
}
