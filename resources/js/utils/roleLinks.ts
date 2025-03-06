interface linkContent {
    route: string,
    label: string,
}

export const linksByRole: Record<number, linkContent[]> = {
    1: [
        {
            route: 'registro.productos', label: 'Registrar productos'
        },
        {
            route: 'caja', label: 'Caja'
        }
    ],
    2: [
        {
            route: 'caja', label: 'Caja'
        }
    ]
}
