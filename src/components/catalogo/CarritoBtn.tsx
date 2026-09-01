import { useState } from "react";
import { useCarrito } from "../../context/CarritoContext";
import CarritoIcon from "../../assets/icons/Carrito.svg"
import CarritoSheet from "./CarritoSheet"

export default function CarritoBtn() {
    const { totalItems, totalPrecio } = useCarrito();
    const [carritoAbierto, setCarritoAbierto] = useState(false);
    return (
        <>
            <div className="fixed inset-x-0 bottom-32 z-[60] mx-auto max-w-[430px] px-6 flex justify-end pointer-events-none">
                {totalItems > 0 ? (
                    <button className="relative pointer-events-auto h-14 px-4 bg-naranja rounded-full shadow-lg flex items-center gap-2 active:opacity-90"
                        onClick={() => setCarritoAbierto(true)}>
                        <img src={CarritoIcon} className="w-6 h-6" />
                        <span className="text-white text-sm font-semibold">{totalItems} {totalItems === 1 ? "producto" : "productos"}</span>
                        <span className="text-white text-sm font-bold">${totalPrecio}</span>
                        <span className="absolute -top-1 -right-1 bg-teal text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                            {totalItems}
                        </span>
                    </button>
                ) : (
                    <button className="relative pointer-events-auto w-14 h-14 bg-naranja rounded-full shadow-lg flex items-center justify-center active:opacity-90">
                        <img src={CarritoIcon} className="w-6 h-6" />
                    </button>
                )}
            </div>
            <CarritoSheet abierto={carritoAbierto} onClose={() => setCarritoAbierto(false)} />
        </>
    )
}
