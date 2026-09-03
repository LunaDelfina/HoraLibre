import getStyle from "./getStyle";
import type { ActivityCardProps } from "../../types/movimiento.types";
import { formatFecha, esFechaHoy } from "../../utils/fecha";


export default function ActivityCard({ movimiento }: ActivityCardProps) {


    const style = getStyle({ movimiento });

    return (

        <div className="flex w-full bg-crema justify-between items-center">
            <div className='flex gap-3 items-center'>
                <div
                    className='w-12 h-12 p-3 rounded-full flex items-center justify-center'  style={{backgroundColor: style.color_secundario}}
                >
                    <img
                        src={style.icon}
                        alt={`Icono de ${movimiento.tipo}`}
                        className="w-6 h-6 object-contain justify-center"
                    />
                </div>
                <div className='flex flex-col'>
                    <h3 className="font-bold text-md" style={{ color: style.color_texto }}>{movimiento.titulo}</h3>
                    <p className='font-ligher text-xs mb-1'>Para {movimiento.hijo} · {movimiento.medio} </p>

                    {(movimiento.tipo === "Recarga" || movimiento.tipo === "Pedido") && (
                        <div className='px-2 py-1 rounded-lg bg-gris w-fit flex gap-1' style={{background:style.color_secundario_badge}}>
                            <img src={style.icon_badge}></img>
                            <p className='font-semibold text-xs' style={{color:style.color_primario_badge}}>{movimiento.estado}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-display font-bolder text-xl decoration-3  '  
                style={{
                    color:style.color_precio,
                    textDecoration:style.line?'line-trough':'none'} }>{style.signo}${movimiento.monto}</p>
                <p className='text-xs text-right font-bold text-gris'>{formatFecha(movimiento.fecha)} {esFechaHoy(movimiento.fecha) ? movimiento.hora : ""}</p>
            </div>
        </div>
    );
}
