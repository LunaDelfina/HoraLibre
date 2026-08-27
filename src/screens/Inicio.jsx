import TopHome from '../components/TopHome'
import hijos from "../data/Hijos.json"
import Movimientos from "../components/MovimientosHome.tsx"
import Almuerzo from "../components/Almuerzo.tsx"
import Disclaimer from "../components/disclaimer.tsx"
function Inicio(){
    return(
        <div>
            <TopHome pantalla="Inicio" nombre="Nacho" hijos={hijos} />
            <Movimientos />
            <Almuerzo />
            <Disclaimer />
        </div>
    )
}

export default Inicio