import Compra from '../assets/ActivityIcons/Compra.svg';
import Devolucion from '../assets/ActivityIcons/Devolucion.svg';
import Pedido from '../assets/ActivityIcons/Pedido.svg';
import Recarga from '../assets/ActivityIcons/Recarga.svg';
import RecargaRechazada from '../assets/ActivityIcons/RecargaRechazada.svg';

import ListoBadge from '../assets/ActivityIcons/ListoBadge.svg';
import PendienteBadge from '../assets/ActivityIcons/PendienteBadge.svg';
import RechazadoBadge from '../assets/ActivityIcons/RechazadoBadge.svg';


type ActivityCardProps = {
    movimiento: {
        id: number;
        tipo: string;
        titulo: string;
        hijo: string;
        medio: string;
        estado: string | null;
        monto: number;
        fecha: string;
    };
};

type ActivityStyle = {
    icon: string;
    color_texto: string;
    color_secundario: string;
    color_primario_badge: string;
    color_secundario_badge: string;
    icon_badge: string;
    color_precio: string;
    signo: string;
    line:boolean

};

function getStyle({ movimiento }: ActivityCardProps): ActivityStyle {
    const teal= "rgba(46, 196, 182, 1)"
    const verde_primario = "#0F6E56"
    const verde_secundario = "rgba(46, 196, 182, 0.25)"
    const verde_secundario_bg = verde_secundario
    const rojo_primario = "#C0392B"
    const rojo_secundario = "rgba(192, 57, 43, 0.25)"
    const rojo_secundario_bg = rojo_secundario
    const amarillo_primario = "#B8860B"
    const amarillo_Secundario = "rgba(251, 188, 5, 0.25)"
    const carbon="rgb(60, 54, 51)"
    const gris_suave = "rgb(154, 154, 154)"
    let color_secundario="";
    let color_primario_badge = "";
    let color_secundario_badge = "";
    let icon_badge = "";
    let color_precio = "";
    let line=false;
    let icon="";

    if (movimiento.tipo === "Pedido") {
        switch (movimiento.estado) {
            case "Listo para retirar":
                color_primario_badge = verde_primario;
                color_secundario_badge = verde_secundario;
                icon_badge = ListoBadge;
                break;
            case "Rechazado":
                color_primario_badge = rojo_primario;
                color_secundario_badge = rojo_secundario;
                icon_badge = RechazadoBadge;
                break;
            case "Armando el pedido":
                color_primario_badge = amarillo_primario;
                color_secundario_badge = amarillo_Secundario;
                icon_badge = PendienteBadge;
                break;
        }
    }
    if (movimiento.tipo === "Recarga") {
        switch (movimiento.estado) {
            case "Aprobada":
                icon=Recarga;
                color_secundario=verde_secundario;
                color_primario_badge = verde_primario;
                color_secundario_badge = verde_secundario;
                icon_badge = ListoBadge;
                color_precio = teal

                break;
            case "Pendiente de aprobación":
                icon=Recarga;
                color_secundario=verde_secundario;
                color_primario_badge = amarillo_primario;
                color_secundario_badge = amarillo_Secundario;
                icon_badge = PendienteBadge;
                color_precio = gris_suave

                break;
            case "Rechazado":
                icon=RecargaRechazada;
                color_secundario="rgb(178, 178, 178,0.25)";
                color_primario_badge = rojo_primario;
                color_secundario_badge = rojo_secundario;
                icon_badge = RechazadoBadge;
                color_precio = gris_suave;
                line=true;

                break;
        }
    }

    switch (movimiento.tipo) {
        case "Compra":
            return {
                icon: Compra,
                color_texto: carbon,
                color_secundario: rojo_secundario_bg,
                color_primario_badge: "",
                color_secundario_badge: "",
                icon_badge: "",
                color_precio: gris_suave,
                signo: "-",
                line
            };
        case "Devolución":
        case "Devolucion":
            return {
                icon: Devolucion,
                color_texto: carbon,
                color_secundario: verde_secundario_bg,
                color_primario_badge: "",
                color_secundario_badge: "",
                icon_badge: "",
                color_precio: teal,
                signo: "+",
                line
            };
        case "Pedido":
            return {
                icon: Pedido,
                color_texto: carbon,
                color_secundario: rojo_secundario_bg,
                color_primario_badge,
                color_secundario_badge,
                icon_badge,
                color_precio: gris_suave,
                signo: "-",
                line
            };
        case "Recarga":
            return {
                icon,
                color_texto: carbon,
                color_secundario,
                color_primario_badge,
                color_secundario_badge,
                icon_badge,
                color_precio,
                signo: "+",
                line
            };
        default:
            return {
                icon: Compra,
                color_texto: carbon,
                color_secundario: "",
                color_primario_badge: "",
                color_secundario_badge: "",
                icon_badge: "",
                color_precio: gris_suave,
                signo: "",
                line
            };
    }
};


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
                <p className='text-xs text-right font-bold text-gris'>{movimiento.fecha}</p>
            </div>
        </div>
    );
}
