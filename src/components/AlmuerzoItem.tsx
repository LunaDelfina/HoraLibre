import type { AlmuerzoProps } from "../types/almuerzo.types"


export default function AlmuerzoItem({ data, seleccionado, onToggle }: AlmuerzoProps) {

   const styleSelected = seleccionado
        ? "bg-teal/25 rounded-lg p-2 transition-all duration-200"
        : "transition-all duration-200";

    return (
        <div className={`flex justify-between items-center ${styleSelected}`}
            onClick={onToggle}>
            <div className="flex flex-col gap-0">
                <h2 className="text-md font-semibold ">{data.plato}</h2>
                <p className="text-gris text-xs">{data.descripcion}</p>
            </div>
            <h3 className="text-gris font-display font-bold tracking-wide text-lg">${data.precio}</h3>

        </div>
    )
}