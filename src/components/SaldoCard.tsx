


type Hijo = {
    nombre: string;
};

function NombresHijos({ hijos }: { hijos: unknown[] }) {
    const nombres = hijos
        .filter((hijo): hijo is Hijo =>
            typeof hijo === "object" &&
            hijo !== null &&
            "nombre" in hijo &&
            typeof hijo.nombre === "string"
        )
        .map((hijo) => hijo.nombre);
    return(
        <div>
            {nombres.map((nombre: string) => (
                <p key={nombre}>{nombre}</p>
            ))}
        </div>
    )
}
export default function SaldoCard({ hijos }: { hijos: unknown[] }) {
    return(
        <div className="w-full  h-32 bg-crema rounded-lg border-2">
            <NombresHijos hijos={hijos} />
        </div>
    )
}