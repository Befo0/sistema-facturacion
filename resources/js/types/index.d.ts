export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    isActive: boolean;
    idRol: number;
}

export interface Categories {
    id: number;
    nombreTipo: string;
}

export type CategoriesArray = [
    Categories
]

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    },
    categories: CategoriesArray
};
