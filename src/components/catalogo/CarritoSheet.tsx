import { useState } from "react"
import { useCarrito } from "../../context/CarritoContext"
import { useHijos } from "../../context/HijosContext"
import { useMovimientos } from "../../context/MovimientosContext"

type CarritoSheetProps = {
    abierto: boolean;
    onClose: () => void;
}

export default function CarritoSheet({ abierto, onClose }: CarritoSheetProps) {
    const { items, sumar, restar, eliminar, totalItems, totalPrecio, vaciar,fecha } = useCarrito();
    const { hijoSeleccionado, descontarSaldo } = useHijos();
    const { agregarPedido } = useMovimientos();
    const [pedidoConfirmado, setPedidoConfirmado] = useState(false);

    const saldoDisponible = hijoSeleccionado?.saldo ?? 0;
    const saldoInsuficiente = totalPrecio > saldoDisponible;

    function handleConfirmar() {
        if (!hijoSeleccionado || hijoSeleccionado.id === undefined || saldoInsuficiente || items.length === 0) return;

        descontarSaldo(hijoSeleccionado.id, totalPrecio);
        agregarPedido({
            hijo: hijoSeleccionado.nombre,
            cantidadProductos: totalItems,
            monto: totalPrecio,
        });
        vaciar();
        setPedidoConfirmado(true);
    }

    function handleClose() {
        setPedidoConfirmado(false);
        onClose();
    }

    return (
        <section className={`fixed inset-0 z-[60] mx-auto max-w-[430px] bg-crema flex flex-col ${abierto ? 'visible' : 'hidden'}`}>
            <div
                className="bg-naranja flex px-8 py-5 items-center justify-start w-full shrink-0 gap-1 active:opacity-90"
                onClick={handleClose}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L8 12L15 19" stroke="#FCF7EE" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h2 className="font-display text-crema text-2xl font-bold">Volver</h2>
            </div>

            {pedidoConfirmado ? (
                <div className="flex flex-col items-center justify-center gap-3 flex-1 px-8 text-center">
                    <h1 className="font-display font-bold text-xl text-carbon">¡Pedido realizado!</h1>
                    <p className="text-gris text-sm">Descontamos el saldo de {hijoSeleccionado?.nombre} y ya lo estamos armando. Podés seguirlo desde Movimientos.</p>
                    <button
                        className="mt-2 bg-naranja text-crema px-6 py-2.5 rounded-lg font-bold text-sm tracking-widest active:opacity-90"
                        onClick={handleClose}
                    >
                        Volver al catálogo
                    </button>
                </div>
            ) : (
                <>
                    <div className="flex flex-col px-6 py-6 gap-4 flex-1 min-h-0 overflow-y-auto">
                        <h1 className="font-display font-bold text-xl text-gris">Tu carrito</h1>

                        {items.length === 0 ? (
                            <p className="text-gris text-sm text-center py-6">Todavía no agregaste productos</p>
                        ) : (
                            items.map((item) => (
                                <div key={item.producto.id} className="flex items-center gap-3">
                                    <img src={item.producto.foto} alt="" className="w-14 h-14 object-contain border-2 border-dashed border-grisclaro rounded-xl p-1" />
                                    <div className="flex flex-col flex-1 min-w-0">
                                        <h2 className="font-display font-bold text-carbon text-sm line-clamp-2">{item.producto.titulo}</h2>
                                        <span className="text-gris text-xs">${item.producto.precio}</span>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0">
                                        <button
                                            className="w-7 h-7 rounded-full bg-teal/15 text-teal flex items-center justify-center active:opacity-90"
                                            onClick={() => restar(item.producto.id)}
                                        >
                                            -
                                        </button>
                                        <span className="text-carbon font-semibold text-sm w-4 text-center">{item.cantidad}</span>
                                        <button
                                            className="w-7 h-7 rounded-full bg-teal/15 text-teal flex items-center justify-center active:opacity-90"
                                            onClick={() => sumar(item.producto.id)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        className="shrink-0 text-gris active:opacity-70"
                                        onClick={() => eliminar(item.producto.id)}
                                        aria-label="Quitar producto"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    {items.length > 0 && (
                        <div className="flex flex-col px-6 py-4 gap-3 shrink-0 border-t border-grisclaro">
                            
                            <div className="flex justify-between items-center">
                                <span className="font-display font-bold text-carbon">Total</span>
                                <span className="font-display font-bold text-carbon text-lg">${totalPrecio}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-display font-bold text-gris">Pedido para</span>
                                <span className="font-display font-bold text-gris text-md">{fecha}</span>
                            </div>
                            {saldoInsuficiente && (
                                <p className="text-red-600 text-xs text-center">
                                    Saldo insuficiente{hijoSeleccionado ? ` de ${hijoSeleccionado.nombre}` : ""} (disponible ${saldoDisponible})
                                </p>
                            )}
                            <button
                                className="w-full bg-naranja disabled:opacity-40 flex justify-center items-center py-2.5 rounded-lg gap-3 active:opacity-90"
                                disabled={saldoInsuficiente}
                                onClick={handleConfirmar}
                            >
                                <h2 className="text-white font-display text-lg tracking-widest">Confirmar pedido</h2>
                            </button>
                        </div>
                    )}
                </>
            )}
        </section>
    )
}
