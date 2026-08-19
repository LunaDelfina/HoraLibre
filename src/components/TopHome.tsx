
import { NavLink } from "react-router-dom";
import NotificationIcon from "../assets/icons/Notification.svg";
//icono/saludo    notificacion
//con fondo naranja
//card de saldo disponible
//elemento en movimiento detras del card de saldo


type SaludoProps = {
    nombre: string;
};

function Ojos() {
  return (
    <svg width="76" height="46" viewBox="0 0 76 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_503_3893)">
<rect width="36" height="36" rx="18" fill="#FFF8EF"/>
<ellipse cx="27.5" cy="20.5" rx="12.5" ry="15.5" fill="#3C3633"/>
</g>
<g clip-path="url(#clip1_503_3893)">
<rect x="40" y="10" width="36" height="36" rx="18" fill="#FFF8EF"/>
<ellipse cx="70.5" cy="27.5" rx="12.5" ry="15.5" fill="#3C3633"/>
</g>
<defs>
<clipPath id="clip0_503_3893">
<rect width="36" height="36" rx="18" fill="white"/>
</clipPath>
<clipPath id="clip1_503_3893">
<rect x="40" y="10" width="36" height="36" rx="18" fill="white"/>
</clipPath>
</defs>
</svg>

  );
}

function Saludo({ nombre }: SaludoProps) {
    return (
        <div className=" w-full flex justify-between px-8 items-center">
            <div className="flex items-center justify-center gap-2">
                <Ojos />
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

export default function TopHome({ nombre }: { nombre: string }) {
    return (
        <section className="flex flex-col items-center justify-center gap-2 w-full h-32 bg-naranja">
            <Saludo nombre={nombre} />
        </section>
    )

}