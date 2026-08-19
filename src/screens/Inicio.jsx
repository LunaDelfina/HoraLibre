import TopHome from '../components/TopHome'
import hijos from "../data/Hijos.json"
import Movimientos from "../components/MovimientosHome.tsx"
function Inicio(){
    return(
        <div>
            <TopHome nombre="Nacho" hijos={hijos} />
            <Movimientos />
        </div>
    )
}

export default Inicio