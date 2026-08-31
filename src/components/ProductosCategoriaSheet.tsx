import type { ProductosCategoriaSheetProps } from "../types/catalogo.types"
import Productos from "../data/Productos.json"
import SubCategorias from "../data/SubCategorias.json"
import ProductItem from "./ProductItem"

export default function ProductosCategoriasSheet({ categoria, onClose }: ProductosCategoriaSheetProps) {
    const abierto = categoria !== null;
    const subcategorias = categoria
        ? SubCategorias.filter((subcategoria) => subcategoria.idCategoriaPrincipal === categoria.id)
        : [];

    return (
        <section className={`fixed inset-0 z-[60] mx-auto max-w-[430px] bg-crema flex flex-col ${abierto ? 'visible' : 'hidden'}`}>
            <div
                className="bg-naranja flex px-8 py-5 items-center justify-start w-full shrink-0 gap-1 active:opacity-90"
                onClick={onClose}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L8 12L15 19" stroke="#FCF7EE" stroke-width="2.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 className="font-display text-crema text-2xl font-bold">Volver</h2>
            </div>

            <div className="flex flex-col px-6 py-6 gap-6 flex-1 min-h-0 overflow-y-auto">
                <h1 className="font-display font-bold text-xl text-gris">{categoria?.titulo}</h1>
                {subcategorias.map((subcategoria) => {
                    const productos = Productos.filter((producto) => producto.idSubcategoria === subcategoria.id);
                    if (productos.length === 0) return null;

                    return (
                        <div key={subcategoria.id} className="flex flex-col gap-3">
                            <h2 className="font-display font-bold text-base text-gris">{subcategoria.titulo}</h2>
                            <div className="flex flex-wrap gap-3">
                                {productos.map((producto) => (
                                    <ProductItem key={producto.id} {...producto} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
