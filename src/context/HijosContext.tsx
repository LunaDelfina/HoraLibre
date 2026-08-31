import { createContext, useContext, useState, type ReactNode } from "react";
import type { Hijo } from "../types/home.types";
import hijosData from "../data/Hijos.json";

type HijosContextValue = {
    hijos: Hijo[];
    hijoSeleccionado: Hijo | null;
    seleccionarHijo: (hijo: Hijo) => void;
    descontarSaldo: (hijoId: number, monto: number) => void;
}

const HijosContext = createContext<HijosContextValue | null>(null);

export function HijosProvider({ children }: { children: ReactNode }) {
    const [hijos, setHijos] = useState<Hijo[]>(hijosData as Hijo[]);
    const [hijoSeleccionado, setHijoSeleccionado] = useState<Hijo | null>(hijosData[0] as Hijo ?? null);

    function seleccionarHijo(hijo: Hijo) {
        setHijoSeleccionado(hijo);
    }

    function descontarSaldo(hijoId: number, monto: number) {
        setHijos((prev) => {
            const actualizados = prev.map((hijo) =>
                hijo.id === hijoId ? { ...hijo, saldo: (hijo.saldo ?? 0) - monto } : hijo
            );
            setHijoSeleccionado((actual) =>
                actual?.id === hijoId ? actualizados.find((hijo) => hijo.id === hijoId) ?? actual : actual
            );
            return actualizados;
        });
    }

    return (
        <HijosContext value={{ hijos, hijoSeleccionado, seleccionarHijo, descontarSaldo }}>
            {children}
        </HijosContext>
    )
}

export function useHijos() {
    const ctx = useContext(HijosContext);
    if (!ctx) throw new Error("useHijos debe usarse dentro de HijosProvider");
    return ctx;
}
