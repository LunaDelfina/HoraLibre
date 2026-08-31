export type CategoriesProps = {
    titulo: string;
    id: number;
    seleccionado: boolean;
    onClick: () => void;
};

export type CategoriaProps = {
    categoria: CategoriesProps;
};

export type ProductosCategoriaSheetProps = {
    categoria: CategoriesProps | null;
    onClose: () => void;
};

export type ProductoProps = {
    id: number;
    titulo: string;
    subtitulo: string;
    precio: number;
    foto: string;
    categoriaGeneral: number;
    idSubcategoria: number;
};
