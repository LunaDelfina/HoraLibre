
import type { MovimientoSheetProps } from "../Types";
import getStyle from "./getStyle";
import HistorialMovimientos from "../data/HistorialMovimientos.json"
import type { HistorialMovimientoProps } from "../Types";
//import { useState } from "react";
import CopyButton from "./copyButton.tsx";
import WhatsappLogo from "../assets/Logos/Whatsapp.svg"

function getHistorial(movimiento: MovimientoSheetProps["movimiento"]) {
    if (!movimiento?.id) return [] as HistorialMovimientoProps[];

    return (HistorialMovimientos as HistorialMovimientoProps[]).filter(
        (item) => item.idMovimiento === movimiento?.id
    );

}
const Linea = () => <div className='bg-gris/25 w-full h-[1px] rounded'></div>;

function MovimientoSheet({ movimiento, onClose }: MovimientoSheetProps) {
    const abierto = movimiento !== null;
    const style = movimiento ? getStyle({ movimiento }) : undefined;
    const historial = getHistorial(movimiento);


    return (
        <section className={`w-full h-full bg-crema absolute top-0 left-0 ${abierto ? 'visible' : 'hidden'}`}>
            <div className="bg-naranja flex px-8 py-5 items-center justify-start w-full" onClick={onClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L8 12L15 19" stroke="#FCF7EE" stroke-width="2.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 className="font-display text-crema text-2xl font-boldest">Volver</h2>
            </div>

            <div className="flex flex-col px-8 mt-5 gap-4" >
                <div className="flex flex-col ">
                    <div
                        className="w-[8vh] h-[8vh] p-4 mb-4 items-center justify-center rounded-full"
                        style={{
                            backgroundColor: style?.color_secundario,

                        }}
                    >
                        <img src={style?.icon} alt={movimiento?.tipo ?? "Movimiento"} className="w-full" />
                    </div>
                    <h1 className="text-4xl font-display text-carbon">$ {movimiento?.monto}</h1>
                    <p className="text-xl font-sans text-carbon font-light ">{movimiento?.hijo} · {movimiento?.medio}</p>
                    <p className="text-md text-gris font-bold">{movimiento?.fecha} - {movimiento?.hora}</p>

                    {(movimiento?.tipo === "Recarga" || movimiento?.tipo === "Pedido") && (
                        <div className='px-2 py-1 rounded-lg bg-gris w-fit flex gap-1' style={{ background: style?.color_secundario_badge }}>
                            <img src={style?.icon_badge}></img>
                            <p className='font-semibold text-xs' style={{ color: style?.color_primario_badge }}>{movimiento.estado}</p>
                        </div>
                    )}

                </div>

                <Linea />
                {historial.length > 0 ?
                    <div>
                        <div>
                            <h3 className="font-display text-carbon text-lg mb-3">Historial</h3>
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
                        </div>

                        {movimiento?.estado === "Rechazado" ?
                            <div className="flex flex-col justify-center items-center w-full mb-5 gap-2">
                                <button className="w-full bg-teal flex justify-center items-center py-2 rounded-lg gap-3">
                                    <img src={WhatsappLogo}></img>
                                    <h2 className="text-white font-display test-lg tracking-widest">Chatear por Whatsapp</h2>
                                </button>
                                <p className="font-bold text-xs text-gris">¿No estás de acuerdo?, hablemos con la cantina</p>

                            </div>
                            : ''}
                        <Linea />
                    </div> : ''}
                <h3 className="font-display text-carbon text-lg ">Número de operación</h3>
                <div className="flex justify-between bg-naranja/5 p-3 rounded-lg">
                    <p>{movimiento?.id}</p>
                    <CopyButton contenido={movimiento?.id ?? ""} />
                </div>


            </div>


        </section>
    )
}
export default MovimientoSheet