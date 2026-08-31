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
    pantalla: string;
    titulo: string;
    subtitulo: string;
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
