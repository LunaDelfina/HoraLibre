

import { useState } from "react";
import { NavLink } from "react-router-dom";
import type {Hijo, SaldoCardProps} from "../types/home.types"

function NombresHijos({
    hijos,
    hijoSeleccionado,
    onSelect,
}: {
    hijos: unknown[];
    hijoSeleccionado: Hijo | null;
    onSelect: (hijo: Hijo) => void;
}) {
    const handleClickHijo = (hijo: Hijo) => {
        onSelect(hijo);
    };

    const hijoseleccionadostyle="bg-crema rounded-t-lg py-2 px-4 text-naranja font-display font-bold text-lg h-full items-center"
    const hijosinseleccionarstyle="bg-[#D9D9D9] py-2 px-4 font-light rounded-tr-lg text-carbon text-md h-full"
    const nombres = hijos
        .filter((hijo): hijo is Hijo =>
            typeof hijo === "object" &&
            hijo !== null &&
            "nombre" in hijo &&
            typeof hijo.nombre === "string"
        )
        .map((hijo) => hijo.nombre);
    return(
        <div className="flex items-start justify-start w-fit bg-[#D9D9D9] h-10 rounded-t-lg overflow-hidden">
            {nombres.map((nombre: string) => (
                <p className={hijoSeleccionado?.nombre===nombre ? hijoseleccionadostyle : hijosinseleccionarstyle}
                      key={nombre} onClick={()=>handleClickHijo(hijos.find((hijo): hijo is Hijo =>
                          typeof hijo === "object" && hijo !== null && "nombre" in hijo && hijo.nombre === nombre
                      ) ?? { nombre })}
                 >{nombre}</p>
            ))}
        </div>
    )
}
export default function SaldoCard({ hijos, pantalla }: SaldoCardProps) {


    const [hijoSeleccionado, setHijoSeleccionado] = useState<Hijo | null>(
        hijos.find((hijo): hijo is Hijo =>
            typeof hijo === "object" && hijo !== null && "nombre" in hijo && typeof hijo.nombre === "string"
        ) ?? null
    );

    return(
        <div className="w-full  h-fit rounded-lg ">
            <NombresHijos
                hijos={hijos}
                hijoSeleccionado={hijoSeleccionado}
                onSelect={setHijoSeleccionado}
            />
            <div className="bg-crema h-full w-full px-4 py-6 rounded-b-lg rounded-tr-lg text-carbon shadow-md flex flex-col items-start justify-center gap-1 font-sans text-md">
                <p className=" font-light">Saldo disponible</p>
                {pantalla === "Inicio" ? (
                    <>
                        <p className=" font-display font-bold text-4xl mb-2 ">${hijoSeleccionado?.saldo}</p>
                        <p className=" font-thin font-gris text-sm">Hoy gastó $2570 en la cantina</p>
                        <NavLink to="/cargarsaldo"
                        className="bg-naranja text-crema px-4 py-2 rounded-lg font-bold text-sm tracking-widest">+ Recargar</NavLink>
                    </>
                ) : (
                    <div className="w-full flex items-center justify-between">
                        <p className=" font-display font-bold text-4xl ">${hijoSeleccionado?.saldo}</p>
                        <NavLink to="/cargarsaldo"
                        className="bg-naranja text-crema px-4 py-2 rounded-lg font-bold text-sm tracking-widest">+ Recargar</NavLink>
                    </div>
                )}
            </div>
        </div>
    )
}