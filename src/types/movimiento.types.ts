export type MovimientoProps = {
    id: number;
    tipo: string;
    titulo: string;
    hijo: string;
    medio: string;
    estado: string | null;
    monto: number;
    fecha: string;
    hora: string;
};

export type ActivityCardProps = {
    movimiento: MovimientoProps;
};

export type ActivityStyle = {
    icon: string;
    color_texto: string;
    color_secundario: string;
    color_primario_badge: string;
    color_secundario_badge: string;
    icon_badge: string;
    color_precio: string;
    signo: string;
    line: boolean;
};

export type MovimientoSheetProps = {
    movimiento: MovimientoProps | null;
    onClose: () => void;
};

export type HistorialMovimientoProps = {
    id: number;
    idMovimiento: number;
    tipo: string;
    descripcion: string;
    fecha: string;
    hora: string;
};

export type TotalCardsProps = {
    tipo: string;
    movimientos: MovimientoProps[];
    mes: number;
    anio: number;
};
