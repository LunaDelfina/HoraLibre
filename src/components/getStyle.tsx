

import Compra from '../assets/ActivityIcons/Compra.svg';
import Devolucion from '../assets/ActivityIcons/Devolucion.svg';
import Pedido from '../assets/ActivityIcons/Pedido.svg';
import Recarga from '../assets/ActivityIcons/Recarga.svg';
import RecargaRechazada from '../assets/ActivityIcons/RecargaRechazada.svg';

import ListoBadge from '../assets/ActivityIcons/ListoBadge.svg';
import PendienteBadge from '../assets/ActivityIcons/PendienteBadge.svg';
import RechazadoBadge from '../assets/ActivityIcons/RechazadoBadge.svg';

import type { ActivityCardProps, ActivityStyle } from '../types/movimiento.types';
export default function getStyle({ movimiento }: ActivityCardProps): ActivityStyle {
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