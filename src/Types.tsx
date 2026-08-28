
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

export type SaludoHomeProps = {
    nombre: string;
};
export type SaludoProps = {
    titulo: string;
    subtitulo: string;
};

export type TopHomeProps = {
    nombre: string;
    hijos: unknown[];
    pantalla:string;
    titulo:string;
    subtitulo:string;
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

export type SaldoCardProps = {
    hijos: unknown[];
    pantalla: string;
};

export type HistorialMovimientoProps={
    id: number;
    idMovimiento:number;
    tipo:string;
    descripcion:string;
    fecha: string;
    hora: string;
}

export type AlmuerzoData = {
    id: number,
    fecha: string,
    plato: string,
    descripcion: string,
    precio: number
}

export type AlmuerzoProps = {
    data: AlmuerzoData;
    seleccionado:boolean;
    onToggle:()=>void;
}

export type DisclaimerProps = {
    nombreEscuela: string;
    telefono: string;
}

export type CategoriesProps={
    titulo:string;
    id:number;
    seleccionado:boolean;
    onClick:()=>void;

}

export type CategorieSelectProps={
    onClick:(idCategoria: number)=>void;
    categorias:unknown[];
    categoriaSeleccionada:number;

}

export type CategoriaProps={
    categoria:CategoriesProps;
}

export type ProductoProps={
    id:number;
    titulo:string;
    subtitulo:string;
    precio:number;
    foto:string;
    categoriaGeneral:number;
    idSubcategoria:number;

}
