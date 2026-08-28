import { useState } from 'react'
import TopHome from '../components/TopHome.tsx'
import hijos from "../data/Hijos.json"
import Calendariocatalogo from '../components/Calendariocatalogo.jsx'
import Categorias from "../data/CategoriasProductos.json"
import CategoriasSelect from "../components/CategoriasSelect.tsx"
import ProductosSlider from '../components/ProductosSlider.tsx'
//import type { TopHomeProps } from '../Types.tsx'

function Catalogo() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(0)
    function handleClick(idCategoria) {
        setCategoriaSeleccionada(idCategoria)
    }

    return (
        <section>
            <TopHome pantalla="Catalogo" titulo="Tu propia" subtitulo="Cantina Virtual" nombre="Nacho" hijos={hijos} />
            <Calendariocatalogo />
            <CategoriasSelect categorias={Categorias} onClick={handleClick} categoriaSeleccionada={categoriaSeleccionada} />
            {Categorias.map((categoria) => {
                return (
                    <ProductosSlider key={categoria.id} categoria={categoria} />
                )
            })}


        </section>
    )
}

export default Catalogo

