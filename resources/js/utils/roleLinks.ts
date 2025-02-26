interface linkContent {
    route: string,
    label: string,
}

export const linksByRole: Record<number, linkContent[]> = {
    1: [
        {
            route: 'registro.productos', label: 'Registrar productos'
        },
    ],
    //2: [
    //   {
    //        route: 'registro.venta', label: 'Registrar venta'
    //    },
    //],
}
