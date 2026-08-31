import WhatsappLogo from "../../assets/Logos/Whatsapp.svg"
import type { AlmuerzoData } from "../../types/almuerzo.types"
export function Whatsapp() {
    return (
        <button className="w-full bg-teal flex justify-center items-center py-2.5 rounded-lg gap-3 active:opacity-90">
            <img src={WhatsappLogo}></img>
            <h2 className="text-white font-display text-lg tracking-widest">Chatear por Whatsapp</h2>
        </button>
    )
}

export function WhatsappAlmuerzo({ seleccionados, platos }: { seleccionados: number[]; platos: AlmuerzoData[] }) {
  const hayElegidos = seleccionados.length > 0;

  if (!hayElegidos) {
    return (
      <p className="text-gris text-xs text-center py-2.5">
        Elegí un plato para pedirlo por WhatsApp
      </p>
    );
  }

  const elegidos = platos.filter(p => seleccionados.includes(p.id));
  const mensaje = encodeURIComponent(
    `Hola! Quiero pedir: ${elegidos.map(p => p.plato).join(", ")}`
  );

  return (
    <a href={`https://wa.me/54911XXXXXXX?text=${mensaje}`} target="_blank" rel="noreferrer"
       className="w-full bg-teal flex justify-center items-center py-2.5 rounded-lg gap-3 active:opacity-90">
      <img src={WhatsappLogo} alt="" />
      <h2 className="text-white font-display text-lg tracking-widest">
        Pedir por WhatsApp {seleccionados.length > 1 && `(${seleccionados.length})`}
      </h2>
    </a>
  );
}