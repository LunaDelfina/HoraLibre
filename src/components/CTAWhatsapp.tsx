import WhatsappLogo from "../assets/Logos/Whatsapp.svg"
import type { AlmuerzoData } from "../Types"
export function Whatsapp() {
    return (
        <button className="w-full bg-teal flex justify-center items-center py-2.5 rounded-lg gap-3 active:opacity-90">
            <img src={WhatsappLogo}></img>
            <h2 className="text-white font-display text-lg tracking-widest">Chatear por Whatsapp</h2>
        </button>
    )
}

export function WhatsappAlmuerzo({data}:AlmuerzoData){
    return(
        {data.lenght>0?
        <button></button>:}

    )
}