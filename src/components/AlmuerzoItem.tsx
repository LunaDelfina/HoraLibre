import type { AlmuerzoProps } from "../Types"
import { useState } from "react";

export default function AlmuerzoItem({ data }: AlmuerzoProps) {

    const [itemSeleccionado, setItemSeleccionado] = useState(false);
    const styleSelected = itemSeleccionado ? "bg-teal/25 rounded-lg p-2 transition-all duration-200" : "transition-all duration-200";

    function handleClick() {
        //alert("se clickeo Puta");
        setItemSeleccionado(!itemSeleccionado);
        //alert(itemSeleccionado)
    }

    return (
        <div className={`flex justify-between items-center ${styleSelected}`}
            onClick={handleClick}>
            <div className="flex flex-col gap-0">
                <h2 className="text-md font-semibold ">{data.plato}</h2>
                <p className="text-gris text-xs">{data.descripcion}</p>
            </div>
            <h3 className="text-gris font-display font-bold tracking-wide text-lg">${data.precio}</h3>

        </div>
    )
}