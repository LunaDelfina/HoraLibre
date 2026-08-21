
export type ActivityCardProps = {
    movimiento: {
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
    line:boolean

};

export type MovimientoProps={
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

export type SaludoProps = {
    nombre: string;
};

export type TopHomeProps = {
    nombre: string;
    hijos: unknown[];
};


export type MovimientoSheetProps = {
    movimiento: MovimientoProps | null;
    onClose: () => void
};

export type Hijo = {
    nombre: string;
    id?: string;
    saldo?: number;
};

export type HistorialMovimientoProps={
    id: number;
    idMovimiento:number;
    tipo:string;
    descripcion:string;
    fecha: string;
    hora: string;
}