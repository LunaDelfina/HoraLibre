const NOMBRES_MESES = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

type SelectorMesProps = {
    mes: number;
    anio: number;
    onMesAnterior: () => void;
    onMesSiguiente: () => void;
};

export default function SelectorMes({ mes, anio, onMesAnterior, onMesSiguiente }: SelectorMesProps) {
    return (
        <div className="flex items-center justify-between w-full bg-white rounded-2xl shadow-sm px-3 py-2.5">
            <button
                onClick={onMesAnterior}
                aria-label="Mes anterior"
                className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-naranja active:bg-naranja/10"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L8 12L15 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <p className="font-display font-bold text-carbon text-lg tracking-wide capitalize">
                {NOMBRES_MESES[mes] ?? "Mes"} {anio}
            </p>

            <button
                onClick={onMesSiguiente}
                aria-label="Mes siguiente"
                className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-naranja active:bg-naranja/10"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    )
}
