
import {NavLink} from "react-router-dom";
import Movimientos from "../data/Movimientos.json";
import ActivityCard from "./ActivityCard";
import MovimientoSheet from "./MovimientoSheet";
import { useState } from "react";
import type {MovimientoProps} from "../Types"

export default function MovimientosHome(){
    
    const movimientos = Movimientos.slice(0, 5);
    const [movimientoAbierto,setMovimientoAbierto]=useState<MovimientoProps | null>(null)

    const handleMovimientoClick=(movimiento:MovimientoProps)=>{
        alert('que clickeas puta');
        setMovimientoAbierto(movimiento);
    }
    const handleCloseMovimiento=()=>{
        alert('por que te vas puta');
        setMovimientoAbierto(null);
    }

    return(

        <section className="flex flex-col items-start justify-center px-8 mt-3 gap-3 w-full h-fit mb-[5vh]">
            <div>
                <h1 className=" font-display font-bold text-xl">Últimos movimientos</h1>
                <NavLink to="/movimientos" className="text-teal font-sans font-semibold text-sm underline underline-offset-4">Ver todos →</NavLink>
            </div>
            <div className="flex flex-col gap-5 w-full">
                {movimientos.map((movimiento:MovimientoProps)=>
                    <div key={movimiento.id} onClick={() => handleMovimientoClick(movimiento)} className="cursor-pointer">
                    <ActivityCard movimiento={movimiento} />
                    </div>
                   
                    )}
                     <MovimientoSheet movimiento={movimientoAbierto} onClose={handleCloseMovimiento} />
            </div>
        </section>

    )
}
