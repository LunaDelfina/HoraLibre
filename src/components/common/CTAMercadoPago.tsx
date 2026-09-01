import MercadoPagoLogo from "../../assets/Logos/MercadoPago.svg"

export function MercadoPagoPago() {
    return (
        <button className="w-full bg-white border border-grisclaro flex justify-center items-center py-2 rounded-lg gap-2 active:opacity-90">
            <img src={MercadoPagoLogo} alt="" className="h-8 w-auto" />
            <h2 className="text-carbon font-display font-bold text-sm">Pagar con Mercado Pago</h2>
        </button>
    )
}
