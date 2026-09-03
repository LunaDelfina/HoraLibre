
import type { MovimientoProps, TotalCardsProps } from "../../types/movimiento.types";

function getMovimientosDelMes(movimientos: MovimientoProps[], mes: number, anio: number) {
    return movimientos.filter((movimiento) => {
        const fechaMovimiento = new Date(movimiento.fecha);
        return fechaMovimiento.getMonth() === mes && fechaMovimiento.getFullYear() == anio
    })
}

function getNombreMes(mes: number) {
    const nombresMeses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    return nombresMeses[mes] ?? "mes desconocido";
}

function getTotalIngresos(movimientos: MovimientoProps[]) {
    return movimientos.reduce((total: number, movimiento: MovimientoProps) => {
        return total + (movimiento.tipo === "Recarga" ? movimiento.monto : 0);
    }, 0);
}

function getTotalGastos(movimientos: MovimientoProps[]) {
    return movimientos.reduce((total: number, movimiento: MovimientoProps) => {
        return total + (movimiento.tipo === "Compra" || movimiento.tipo === "Pedido" ? movimiento.monto : 0);
    }, 0);
}

export default function TotalCards({ tipo, movimientos, mes, anio }: TotalCardsProps) {
    const colorfondo =  tipo=== "ingresos" ? "bg-teal/25" : "bg-rojo/25"
    const colorletra=  tipo=== "ingresos" ? "text-verde" : "text-rojo"

    const titulo= tipo=== "ingresos" ? `Cargaste en ${getNombreMes(mes)}` : `Se gastó en ${getNombreMes(mes)}`
    const monto= tipo=== "ingresos" ? getTotalIngresos(getMovimientosDelMes(movimientos, mes, anio)) : getTotalGastos(getMovimientosDelMes(movimientos, mes, anio))

return (

    <div className={`w-full rounded-lg ${colorfondo} ${colorletra} px-4 py-3 flex flex-col  items-start justify-center text-left`}>
        <p className="text-xs font-semibold">{titulo}</p>
        <p className={`text-lg font-[900]`}>
            ${monto.toFixed(2)}
        </p>
    </div>

)
}