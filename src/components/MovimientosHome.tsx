
import {NavLink} from "react-router-dom";
import Movimientos from "../data/Movimientos.json";
import ActivityCard from "./ActivityCard";
export default function MovimientosHome(){
    type MovimientoProps={
        id: number;
        tipo: string;
        titulo: string;
        hijo: string;
        medio: string;
        estado: string | null;
        monto: number;
        fecha: string;
    };
    const movimientos = Movimientos.slice(0, 5);
    return(

        <section className="flex flex-col items-start justify-center px-8 mt-3 gap-2 w-full h-fit">
            <div>
                <h1 className=" font-display font-bold text-xl">Últimos movimientos</h1>
                <NavLink to="/movimientos" className="text-teal font-sans font-semibold text-sm underline underline-offset-4">Ver todos →</NavLink>
            </div>
            <div>
                {movimientos.map((movimiento:MovimientoProps)=>
                    <ActivityCard key={movimiento.id} movimiento={movimiento}/>
                    )}
            </div>
        </section>

    )
}