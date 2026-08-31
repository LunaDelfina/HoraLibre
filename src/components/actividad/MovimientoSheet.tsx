
import type { MovimientoSheetProps } from "../../types/movimiento.types";
import getStyle from "./getStyle";
import HistorialMovimientos from "../../data/HistorialMovimientos.json"
import type { HistorialMovimientoProps } from "../../types/movimiento.types";
//import { useState } from "react";
import CopyButton from "../common/copyButton.tsx";
import { Whatsapp } from "../common/CTAWhatsapp.tsx"

function getHistorial(movimiento: MovimientoSheetProps["movimiento"]) {
    if (!movimiento?.id) return [] as HistorialMovimientoProps[];

    return (HistorialMovimientos as HistorialMovimientoProps[]).filter(
        (item) => item.idMovimiento === movimiento?.id
    );

}

function MovimientoSheet({ movimiento, onClose }: MovimientoSheetProps) {
    const abierto = movimiento !== null;
    const style = movimiento ? getStyle({ movimiento }) : undefined;
    const historial = getHistorial(movimiento);


    return (
        <section className={`fixed inset-0 z-[60] mx-auto max-w-[430px] bg-crema flex flex-col ${abierto ? 'visible' : 'hidden'}`}>
            <div
                className="bg-naranja flex px-8 py-5 items-center justify-start w-full shrink-0 gap-1 active:opacity-90"
                onClick={onClose}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L8 12L15 19" stroke="#FCF7EE" stroke-width="2.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 className="font-display text-crema text-2xl font-bold">Volver</h2>
            </div>

            <div className="flex flex-col px-6 py-6 gap-6 flex-1 min-h-0 overflow-y-auto">

                {/* Resumen del movimiento */}
                <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md px-6 py-7 gap-1">
                    <div
                        className="w-20 h-20 p-4 mb-2 flex items-center justify-center rounded-full"
                        style={{ backgroundColor: style?.color_secundario }}
                    >
                        <img src={style?.icon} alt={movimiento?.tipo ?? "Movimiento"} className="w-full h-full object-contain" />
                    </div>
                    <p className="font-sans font-bold text-xs text-gris uppercase tracking-widest">{movimiento?.titulo}</p>
                    <h1
                        className="font-display font-bold text-4xl"
                        style={{ color: style?.color_precio || undefined }}
                    >
                        {style?.signo}${movimiento?.monto}
                    </h1>
                    <p className="font-sans text-sm text-carbon font-light">{movimiento?.hijo} · {movimiento?.medio}</p>
                    <p className="font-sans text-xs text-gris font-bold">{movimiento?.fecha} · {movimiento?.hora}</p>

                    {(movimiento?.tipo === "Recarga" || movimiento?.tipo === "Pedido") && (
                        <div className='px-3 py-1 mt-3 rounded-lg bg-gris w-fit flex items-center gap-1' style={{ background: style?.color_secundario_badge }}>
                            <img src={style?.icon_badge}></img>
                            <p className='font-semibold text-xs' style={{ color: style?.color_primario_badge }}>{movimiento.estado}</p>
                        </div>
                    )}
                </div>

                {/* Historial */}
                {historial.length > 0 &&
                    <div className="bg-white rounded-2xl shadow-sm px-5 py-5">
                        <h3 className="font-display font-bold text-carbon text-lg mb-4">Historial</h3>
                        <ul className="flex flex-col">
                            {historial.map((item, index) => {
                                const esUltimo = index === historial.length - 1;
                                return (
                                    <li key={item?.id} className="flex gap-3 list-none">
                                        <div className="flex flex-col items-center">
                                            <span
                                                className="w-2.5 h-2.5 rounded-full mt-1 shrink-0"
                                                style={{ backgroundColor: esUltimo ? '#2CBFA1' : '#D9D9D9' }}
                                            />
                                            {!esUltimo && <span className="w-[2px] flex-1 bg-grisclaro my-1" />}
                                        </div>
                                        <div className={esUltimo ? 'pb-4' : 'pb-5'}>
                                            <p className="font-semibold text-carbon text-sm leading-tight">{item.descripcion}</p>
                                            <p className="font-bold text-gris text-xs mt-0.5">{item.fecha} · {item.hora}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                        {movimiento?.estado === "Rechazado" &&
                            <div className="flex flex-col justify-center items-center w-full mt-1 gap-2">
                                <Whatsapp />
                                <p className="font-bold text-xs text-gris text-center">¿No estás de acuerdo? Hablemos con la cantina</p>
                            </div>
                        }
                    </div>
                }

                {/* Número de operación */}
                <div className="bg-white rounded-2xl shadow-sm px-5 py-4">
                    <h3 className="font-display font-bold text-carbon text-lg mb-4">Número de operación</h3>
                    <div className="flex justify-between items-center bg-naranja/5 px-3 py-2.5 rounded-lg">
                        <p className="font-sans font-semibold text-carbon">{movimiento?.id}</p>
                        <CopyButton contenido={movimiento?.id ?? ""} />
                    </div>
                </div>

            </div>

        </section>
    )
}
export default MovimientoSheet
