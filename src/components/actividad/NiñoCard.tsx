import { useHijos } from "../../context/HijosContext";
import type { Hijo } from "../../types/actividad.types";
//import foto from "../../assets/ProfilePicDefault/Durazno.svg"

type HijoCardProps = {
    hijo: Hijo;
    isSelected: boolean;
    onSelect: () => void;
};

function HijoCard({ hijo, isSelected, onSelect }: HijoCardProps) {


    //const nombreCompleto = [hijo.nombre, hijo.apellido].filter(Boolean).join(" ");
    const nombre = hijo.nombre
    const fechaNacimiento = hijo.fechaNacimiento ? new Date(hijo.fechaNacimiento) : null;
    const hoy = new Date();
    const edad = fechaNacimiento && !Number.isNaN(fechaNacimiento.getTime())
        ? hoy.getFullYear() - fechaNacimiento.getFullYear() -
        (hoy < new Date(hoy.getFullYear(), fechaNacimiento.getMonth(), fechaNacimiento.getDate()) ? 1 : 0)
        : null;
    console.log(isSelected, onSelect)
    const cursando = [hijo.grado, edad].filter(Boolean).join(" · ");
    const masComprado= "Pepsi"
    const alergia= "Maní"

    return (
        <div className="flex flex-col min-w-full shrink-0 bg-white snap-center p-4 scrollbar-hide rounded-lg shadow-md border-2 border-transparent gap-3" >
            <div className="flex items-center gap-3 justify-start">
                <div className="rounded-full overflow-hidden w-24 h-24">
                    <img className="fit-cover w-full h-full" src={hijo.foto} alt={nombre} />
                </div>
                <div>
                    <h1 className="text-3xl font-[900] font-display text-naranja">{nombre}</h1>
                    <p className="text-sm font-semibold text-carbon">{cursando} años</p>
                    <p className="text-sm font-lighter text-gris">{hijo.escuela} </p>
                </div>

            </div>
            <div className="flex w-full gap-2">
                <div className="bg-verde/25 w-full px-4 py-3 flex flex-col items-start justify-center rounded-xl">
                    <p className="text-verde font-semibold text-xs">Parece que le gusta</p>
                    <p className="font-[900] text-verde text-sm">{masComprado}</p>
                </div>
                <div className="bg-rojo/25 w-full px-4 py-3 flex flex-col items-start justify-center rounded-xl">
                    <p className="text-rojo font-semibold text-xs">Tiene alergia a </p>
                    <p className="font-[900] text-rojo text-sm">{alergia}</p>
                </div>

            </div>
        </div>
    );
}


export default function HijosSlider() {

    const { hijos, hijoSeleccionado } = useHijos();
    const setHijoSeleccionado = useHijos().seleccionarHijo;

    if (!hijos || hijos.length === 0) return null;
    return (
        <section className="flex gap-3 overflow-x-auto snap-x snap-mandatory w-full p-8 mt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {hijos.map((hijo) => (
                <HijoCard key={hijo.id} hijo={hijo} isSelected={hijoSeleccionado?.id === hijo.id} onSelect={() => setHijoSeleccionado(hijo)} />
            ))}
        </section>
    )
}