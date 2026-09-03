import { useState } from "react";
import type { MovimientoProps } from "../../types/movimiento.types"
import ActivityCard from "../actividad/ActivityCard";
import MovimientoSheet from "../actividad/MovimientoSheet";


type PropFiltrosMovimientos = {
    movimientos: MovimientoProps[],
    mes: number,
    anio: number,
    filtro: string

}

export default function FiltrosMovimientos({ movimientos, mes, anio, filtro }: PropFiltrosMovimientos) {
    const [movimientoAbierto, setMovimientoAbierto] = useState<MovimientoProps | null>(null)

    const movimientosDelMes = movimientos.filter((movimiento) => {
        const fechaMovimiento = new Date(movimiento.fecha)
        return fechaMovimiento.getMonth() === mes && fechaMovimiento.getFullYear() === anio
    })
    const filtrosTipoIngreso = ["Recarga", "Devolucion"];
    const filtrosTipoEgreso = ["Compra", "Pedido"];

    const filteredMovimientos =
        filtro === "Todos" ? movimientosDelMes : movimientosDelMes.filter((movimiento) => movimiento.tipo === filtro || (filtro === "Ingresos" && filtrosTipoIngreso.includes(movimiento.tipo)) || (filtro === "Egresos" && filtrosTipoEgreso.includes(movimiento.tipo)))

    const agrupadosPorDia = filteredMovimientos.reduce((acumulador: Record<string, { movimientos: MovimientoProps[], diaConPalabras: string }>, movimiento) => {
        const fecha = new Date(movimiento.fecha)
        const dia = fecha.toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", year: "numeric" })
        const diaConPalabras = fecha
            .toLocaleDateString("es-AR", { day: "numeric", month: "long" })
            .replace(/ de (\p{L})/u, (_, inicial) => ` de ${inicial.toUpperCase()}`)
        if (!acumulador[dia]) {
            acumulador[dia] = { movimientos: [], diaConPalabras }
        }
        acumulador[dia].movimientos.push(movimiento)
        return acumulador
    }, {})
       const handleMovimientoClick=(movimiento:MovimientoProps)=>{
        setMovimientoAbierto(movimiento);
    }

    


    return (
        <div className="flex flex-col mt-3 gap-6">
            {Object.entries(agrupadosPorDia).map(([dia, { movimientos: movimientosDelDia, diaConPalabras }]) => (
                <div key={dia} className="flex flex-col gap-3">
                    <h3 className="text-xs font-[900] text-gris">{diaConPalabras}</h3>
                    <div className="flex flex-col gap-6" >
                        {movimientosDelDia.map((movimiento) => (
                            <div onClick={() => handleMovimientoClick(movimiento)}>
                            <ActivityCard key={movimiento.id} movimiento={movimiento}  />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <MovimientoSheet movimiento={movimientoAbierto} onClose={() => setMovimientoAbierto(null)} />

        </div>
    )
}