import EscuelaData from "../../data/EscuelaData.json"

export default function Disclaimer() {
    const { Nombre, telefono } = EscuelaData[0]

    return (
        <section className="px-8 pb-8">
            <div className="bg-white rounded-2xl shadow-sm px-5 py-6 flex flex-col gap-3">
                <h2 className="font-display font-bold text-lg text-carbon">¿Necesitás ayuda?</h2>

                <a
                    href={`https://wa.me/${telefono.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-sm text-gris"
                >
                    Escribile a la cantina de {Nombre} → <span className="font-bold text-carbon">{telefono}</span>
                </a>

                <p className="font-sans text-xs text-gris leading-relaxed">
                    Hora Libre <span className="font-bold text-carbon">no es una entidad financiera</span> ni una billetera virtual. La app refleja las transacciones acordadas entre vos y el kiosco de la escuela; el dinero lo administra el kiosco, no Hora Libre.
                </p>

                <p className="font-sans text-xs text-gris leading-relaxed">
                    Por problemas con la app nos podés contactar a <span className="font-bold text-carbon">soporte@horalibre.com</span>
                </p>
            </div>
        </section>
    )
}
