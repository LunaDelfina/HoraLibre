import TopHome from '../components/TopHome.tsx'
import hijos from "../data/Hijos.json"
import Calendariocatalogo from '../components/Calendariocatalogo.jsx'
import Categorias from "../data/CategoriasProductos.json"
import ProductosSlider from '../components/ProductosSlider.tsx'
import Carrito from '../components/CarritoBtn.jsx'
//import type { TopHomeProps } from '../types/home.types.ts'

function Catalogo() {
    return (
        <section>
            <TopHome pantalla="Catalogo" titulo="Tu propia" subtitulo="Cantina Virtual" nombre="Nacho" hijos={hijos} />
            <Calendariocatalogo />
            {Categorias.map((categoria) => {
                return (
                    <ProductosSlider key={categoria.id} categoria={categoria} />
                )
            })}
            <Carrito />


        </section>
    )
}

export default Catalogo

