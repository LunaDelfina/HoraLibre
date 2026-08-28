
import type { CategoriesProps,CategorieSelectProps } from "../Types"

type Categoria = {
    id: number
    titulo: string
}

function BotonCategoria({ titulo, seleccionado, onClick }:CategoriesProps) {
    const styleSinSeleccionar="bg-white border border-gris/25 w-full rounded-lg text-gris p-2 transition-all duration-200"
    const styleSeleccionado="bg-naranja border-crema w-full rounded-lg text-crema p-2 transition-all duration-200 font-bold"
    return (
        <button className={seleccionado?styleSeleccionado:styleSinSeleccionar} onClick={onClick}>
            <p className="font-semibold text-xs">{titulo}</p>
        </button>
    )
}

export default function CategoriasSelect({ categorias,onClick, categoriaSeleccionada}:CategorieSelectProps) {
    const categoriasList = categorias as Categoria[]

    return (
        <div className="px-8 w-full overflow-scroll scrollbar-hide">
            <div className="flex gap-2">
                <BotonCategoria
                    seleccionado={categoriaSeleccionada === 0}
                    titulo={"Todos"}
                    onClick={() => onClick(0)}
                    key="0"
                    id={0}
                />
                {categoriasList.map((categoria: Categoria) => (
                <BotonCategoria
                    key={categoria.id}
                    seleccionado={categoriaSeleccionada === categoria.id}
                    onClick={() => onClick(categoria.id)}
                    titulo={categoria.titulo}
                    id={categoria.id}
                />
            ))}

            </div>


        </div>
    )
}