import TopHome from '../components/TopHome.tsx'
import hijos from "../data/Hijos.json"
import Calendariocatalogo from './Calendariocatalogo.jsx'
//import type { TopHomeProps } from '../Types.tsx'
function Catalogo(){
    return (
        <section>
           <TopHome pantalla="Catalogo" titulo="Tu propia" subtitulo="Cantina Virtual" nombre="Nacho" hijos={hijos}  />
           <Calendariocatalogo />

        </section>
    )
}

export default Catalogo

