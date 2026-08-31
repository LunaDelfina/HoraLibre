
//import  productos from "../data/Productos.json"
import { useState } from "react"
import type { CategoriaProps, CategoriesProps } from "../types/catalogo.types"
import Productos from "../data/Productos.json"
import ProductItem from "./ProductItem";
import ProductosCategoriasSheet from "./ProductosCategoriaSheet";

function filtrarproductos(cat: number) {

    return (
        Productos.filter((producto) =>
            producto.categoriaGeneral === cat)
            .slice(-10)
    )
}

export default function ProductosSlider({ categoria }: CategoriaProps) {
    const filteredProducts = filtrarproductos(categoria.id)
    const [categoriaAbierta, setCategoriaAbierta] = useState<CategoriesProps | null>(null)

    return (
        <div className=" flex flex-col gap-2 px-8 mt-8">
            <div className="flex justify-between">
                <h1 className=" font-display font-bold text-xl text-gris">{categoria.titulo}</h1>
                <button className="text-teal font-sans font-semibold text-sm underline underline-offset-4" onClick={() => setCategoriaAbierta(categoria)}>Ver todos →</button>
            </div>
            <div className="flex overflow-scroll scrollbar-hide gap-3">
            {filteredProducts.map((producto)=>(
                <ProductItem key={producto.id} {...producto} />
            ))}
            </div>
            <ProductosCategoriasSheet categoria={categoriaAbierta} onClose={() => setCategoriaAbierta(null)} />
        </div>
    )

}