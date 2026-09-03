import TopHome from '../components/common/TopHome.tsx'
import ResumenMes from '../components/cargarsaldo/ResumenMes.tsx'


function CargarSaldo() {
    return (
        <section>
            <TopHome pantalla="CargarSaldo" titulo=" " subtitulo="Cargar Saldo" nombre="Nacho" />
            <ResumenMes />


        </section>
    )
}

export default CargarSaldo