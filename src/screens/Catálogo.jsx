import TopHome from '../components/common/TopHome.tsx'
import Calendariocatalogo from '../components/catalogo/Calendariocatalogo.jsx'
import Categorias from "../data/CategoriasProductos.json"
import ProductosSlider from '../components/catalogo/ProductosSlider.tsx'
import Carrito from '../components/catalogo/CarritoBtn.jsx'
import {CarritoProvider} from "../context/CarritoContext.tsx"
//import type { TopHomeProps } from '../types/home.types.ts'

function Catalogo() {
    return (
        <CarritoProvider>
        <section>
            <TopHome pantalla="Catalogo" titulo="¡Tu propia" subtitulo="Cantina Virtual!" nombre="Nacho" />
            <Calendariocatalogo />
            {Categorias.map((categoria) => {
                return (
                    <ProductosSlider key={categoria.id} categoria={categoria} />
                )
            })}
            <Carrito />


        </section>
        </CarritoProvider>
    )
}

export default Catalogo

