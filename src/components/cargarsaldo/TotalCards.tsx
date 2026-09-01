
import type { MovimientoProps } from "../../types/movimiento.types";

function getMovimientosDelMes(movimientos: MovimientoProps[], mes: number, anio: number) {
    return movimientos.filter((movimiento) => {
        const fechaMovimiento = new Date(movimiento.fecha);
        return fechaMovimiento.getMonth() === mes && fechaMovimiento.getFullYear() == anio
    })
}

function getTotalIngresos(movimientos: MovimientoProps[]) {
    return movimientos.reduce((total: number, movimiento: MovimientoProps) => {
        return total + (movimiento.tipo === "ingreso" ? movimiento.monto : 0);
    }, 0);
}

function getTotalGastos(movimientos: MovimientoProps[]) {
    return movimientos.reduce((total: number, movimiento: MovimientoProps) => {
        return total + (movimiento.tipo === "compra" ? movimiento.monto : 0);
    }, 0);
}

export default function TotalCards(tipo: string, movimientos: MovimientoProps[], mes: number, anio: number) {
    const colorfondo =  tipo=== "ingresos" ? "bg-teal/25" : "bg-rojo/25"
    const colorletra=  tipo=== "ingresos" ? "bg-teal" : "bg-rojo"

    const titulo= tipo=== "ingresos" ? `Cargaste en ${mes}` : `Se gastó en ${mes}`
    const monto= tipo=== "ingresos" ? getTotalIngresos(getMovimientosDelMes(movimientos, mes, anio)) : getTotalGastos(getMovimientosDelMes(movimientos, mes, anio))

return (

    <div className={`w-full rounded-lg ${colorfondo} p-4 flex flex-col items-start justify-center gap-1`}>
        <p>{titulo}</p>
        <p className={`text-2xl font-bold ${colorletra} text-white p-2 rounded-lg`}>
            ${monto.toFixed(2)}
        </p>
    </div>

)
}