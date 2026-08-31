import { createContext, useContext, useState, type ReactNode } from "react";
import type { MovimientoProps } from "../types/movimiento.types";
import movimientosData from "../data/Movimientos.json";

type NuevoPedido = {
    hijo: string;
    cantidadProductos: number;
    monto: number;
};

type MovimientosContextValue = {
    movimientos: MovimientoProps[];
    agregarPedido: (pedido: NuevoPedido) => void;
}

const MovimientosContext = createContext<MovimientosContextValue | null>(null);

function horaActual() {
    const ahora = new Date();
    const minutos = ahora.getMinutes().toString().padStart(2, "0");
    const horas12 = ahora.getHours() % 12 || 12;
    const sufijo = ahora.getHours() >= 12 ? "pm" : "am";
    return `${horas12}:${minutos}${sufijo}`;
}

export function MovimientosProvider({ children }: { children: ReactNode }) {
    const [movimientos, setMovimientos] = useState<MovimientoProps[]>(movimientosData as MovimientoProps[]);

    function agregarPedido({ hijo, cantidadProductos, monto }: NuevoPedido) {
        setMovimientos((prev) => {
            const nuevoId = prev.reduce((max, item) => Math.max(max, item.id), 0) + 1;
            const pedido: MovimientoProps = {
                id: nuevoId,
                tipo: "Pedido",
                titulo: "Pedido por la app",
                hijo,
                medio: `${cantidadProductos} ${cantidadProductos === 1 ? "producto" : "productos"}`,
                estado: "Armando el pedido",
                monto,
                fecha: "Hoy",
                hora: horaActual(),
            };
            return [...prev, pedido];
        });
    }

    return (
        <MovimientosContext value={{ movimientos, agregarPedido }}>
            {children}
        </MovimientosContext>
    )
}

export function useMovimientos() {
    const ctx = useContext(MovimientosContext);
    if (!ctx) throw new Error("useMovimientos debe usarse dentro de MovimientosProvider");
    return ctx;
}
