export type AlmuerzoData = {
    id: number;
    fecha: string;
    plato: string;
    descripcion: string;
    precio: number;
};

export type AlmuerzoProps = {
    data: AlmuerzoData;
    seleccionado: boolean;
    onToggle: () => void;
};
