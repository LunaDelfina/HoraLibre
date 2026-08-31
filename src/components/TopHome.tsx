
import { NavLink } from "react-router-dom";
import NotificationIcon from "../assets/icons/Notification.svg";
import SaldoCard from "./SaldoCard";
import OjosMascota from "./OjosMascota";
import OndaSaldo from "./OndaSaldo.tsx";
//icono/saludo    notificacion
//con fondo naranja
//card de saldo disponible
//elemento en movimiento detras del card de saldo

import type { SaludoProps,SaludoHomeProps, TopHomeProps } from "../types/home.types.ts";




function SaludoHome({ nombre }: SaludoHomeProps) {
    return (
        <div className=" w-full flex justify-between items-center">
            <div className="flex items-center justify-center gap-2">
                <OjosMascota className="w-14 h-auto" />
                <div className="text-crema font-display gap-0 flex flex-col items-start font-bold">
                    <h2 className="text-xl">¡Hola,</h2>
                    <h2 className=" text-3xl tracking-wide height-fit">{nombre}!</h2>
                </div>
            </div>
            <NavLink to="notificaciones">
                <img src={NotificationIcon} alt="Notificaciones"
                    className="w-10 h-10" />
            </NavLink>
        </div>

    )
}

function Saludo({titulo,subtitulo}:SaludoProps){
     return (
        <div className=" w-full flex justify-between items-center">
            <div className="flex items-center justify-center gap-2">
                <div className="text-crema font-display gap-0 flex flex-col items-start font-bold">
                    <h2 className="text-xl">¡{titulo}</h2>
                    <h2 className=" text-3xl tracking-wide height-fit">{subtitulo}!</h2>
                </div>
            </div>
            <NavLink to="notificaciones">
                <img src={NotificationIcon} alt="Notificaciones"
                    className="w-10 h-10" />
            </NavLink>
        </div>

    )
}





export default function TopHome({ nombre, hijos,pantalla, titulo,subtitulo }: TopHomeProps) {
    return (
        <section className="flex flex-col items-center justify-center gap-1 w-full ">
            <div className="bg-naranja w-full p-8 pb-0">{pantalla==="Inicio"? <SaludoHome nombre={nombre}/>:<Saludo  titulo={titulo} subtitulo={subtitulo}/>}</div>
            <OndaSaldo className="absolute z-[-4]" />
            <div className=" w-full p-8"><SaldoCard hijos={hijos} pantalla={pantalla} /></div>
        </section>
    )

}