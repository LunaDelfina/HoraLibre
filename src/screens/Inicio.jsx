import TopHome from '../components/TopHome'
import hijos from "../data/Hijos.json"
import Movimientos from "../components/MovimientosHome.tsx"
import Almuerzo from "../components/Almuerzo.tsx"
function Inicio(){
    return(
        <div>
            <TopHome nombre="Nacho" hijos={hijos} />
            <Movimientos />
            <Almuerzo />
        </div>
    )
}

export default Inicio