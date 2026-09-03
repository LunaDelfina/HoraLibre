export type SaludoHomeProps = {
    nombre: string;
};

export type SaludoProps = {
    titulo?: string;
    subtitulo?: string;
};

export type TopHomeProps = {
    nombre: string;
    pantalla: string;
    titulo?: string;
    subtitulo?: string;
};

export type Hijo = {
    nombre: string;
    apellido?: string;
    id?: number;
    saldo?: number;
    fechaNacimiento?: string;
    escuela?: string;
    grado?: string;
    foto?: string;
    intereses?: string[];
};

export type SaldoCardProps = {
    pantalla: string;
};
