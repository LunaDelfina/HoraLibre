import TopHome from '../components/common/TopHome'
import Movimientos from "../components/home/MovimientosHome.tsx"
import Almuerzo from "../components/home/Almuerzo.tsx"
import Disclaimer from "../components/home/disclaimer.tsx"
function Inicio(){
    return(
        <div>
            <TopHome pantalla="Inicio" nombre="Nacho" />
            <Movimientos />
            <Almuerzo />
            <Disclaimer />
        </div>
    )
}

export default Inicio