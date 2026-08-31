import type { ProductoProps } from "../types/catalogo.types"

export default function ProductItem(producto: ProductoProps) {
    return (
        <div className="flex flex-col w-[calc((100%-0.75rem)/2)] shrink-0 gap-1">
            <div className="relative h-[22vh] w-full border-2 border-dashed border-grisclaro rounded-2xl">
                <img src={producto.foto} alt=""
                    className="h-full w-full object-contain p-3" />
                <button className="absolute bottom-2 right-2 flex items-center justify-center w-9 h-9 rounded-full bg-teal/15 text-teal">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </button>
            </div>
            <h2 className="font-display font-bold text-carbon line-clamp-2 text-sm">{producto.titulo}</h2>
            <span className="text-xs font-semibold text-gris">{producto.subtitulo}</span>
            <span className="text-gris">${producto.precio}</span>
        </div>
    )
}
