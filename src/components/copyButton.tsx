import { useState } from "react";
import CopyIcon from "../assets/icons/Copy.svg";
import CopiedIcon from "../assets/icons/Copied.svg";

export type ContenidoProps = {
    contenido: string | number;
};




export default function CopyButton({ contenido }: ContenidoProps) {
    const [icono, setIcono] = useState<string>(CopyIcon);

    const copiarConFallback = (texto: string) => {
        const textarea = document.createElement("textarea");
        textarea.value = texto;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    };

    const handleClick = async () => {
        const texto = String(contenido);
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(texto);
            } else {
                copiarConFallback(texto);
            }
            setIcono(CopiedIcon);
            setTimeout(() => setIcono(CopyIcon), 1000);
        } catch (e: unknown) {
            console.log(e);
        }
    };



    return (
        <button onClick={handleClick} >
            <img src={icono} alt="Copiar"></img>
        </button>
    )
}