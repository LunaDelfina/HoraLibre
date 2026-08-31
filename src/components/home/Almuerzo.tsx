
import { useState } from "react";
import AlmuerzoItem from "./AlmuerzoItem";
import AlmuerzoData from "../../data/Almuerzo.json";
import { WhatsappAlmuerzo } from "../common/CTAWhatsapp"


export default function Almuerzo() {
    const hoy = new Date();
    const diaSemana = hoy.toLocaleDateString('es-ES', { weekday: 'long' });
    const diaCapitalizado = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1)
    // Obtiene el día y mes numéricos forzando dos dígitos (ej: "27/08")
    const dia = String(hoy.getDate()).padStart(2, '0');
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const [seleccionados, setSeleccionados] = useState<number[]>([])

    function toggleSeleccion(id: number) {
        alert("QUE TOCAS LA CONCHA DE TU MADRE");
        setSeleccionados(prev =>
            prev.includes(id) ? prev.filter(x => x != id) : [...prev, id]
        );
    }


    return (
        <section className="p-8 flex flex-col gap-3">
            <div
                className="flex flex-col gap-1"

            >
                <div className="flex justify-between items-end">
                    <h1 className=" font-display font-bold text-xl">Te resolvemos el almuerzo</h1>
                    <p className="text-naranja font-bold text-sm">{`${diaCapitalizado} ${dia}/${mes}`}</p>
                </div>
                <p className="text-gris font-sans font-semibold text-xs ">Pedilo por WhatsApp y se descuenta del saldo de tu hijo/a.</p>
            </div>
            <div className="flex flex-col gap-2">
                {AlmuerzoData.map((almuerzo) => (
                    <AlmuerzoItem
                        key={almuerzo.id}
                        data={almuerzo}
                        seleccionado={seleccionados.includes(almuerzo.id)}
                        onToggle={() => toggleSeleccion(almuerzo.id)}
                    />
                ))}
            </div>
            <WhatsappAlmuerzo seleccionados={seleccionados} platos={AlmuerzoData} />
            <div className="bg-ambar/25 rounded-lg text-center p-2 text-gris font-bold text-xs">Pedilo antes de las 10:35</div>

        </section>
    )
}