import TopHome from '../components/TopHome'
import hijos from "../data/Hijos.json"

function Inicio(){
    return(
        <div>
            <TopHome nombre="Nacho" hijos={hijos} />
        </div>
    )
}

export default Inicio