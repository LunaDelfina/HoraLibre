import TotalCards from './TotalCards.tsx'
import { useMovimientos } from '../../context/MovimientosContext.tsx'
import { useState } from 'react'
import FiltrosMovimientos from './FiltrosMovimientos.tsx'
import SelectorMes from './SelectorMes.tsx'

import MovimientosList from './MovimientosList.tsx'
export default function ResumenMes() {
    const { movimientos: movimientosData } = useMovimientos();
    const [mes, setMes] = useState<number>(new Date().getMonth());
    const [anio, setAnio] = useState<number>(new Date().getFullYear());
    const [filtro,setFiltro]=useState<string>("Todos")

    const onMesAnterior= () => {
        setMes((prevMes)=>{
            if(prevMes===0){
                setAnio((prevAnio)=>prevAnio-1)
                return 11
            }
            return prevMes-1
        })
    }
      const onMesSiguiente = () => {
        setMes((prevMes)=>{
            if(prevMes===11){
                setAnio((prevAnio)=>prevAnio+1)
                return 0
            }
            return prevMes+1
        })
    }

    return (
        <section className="flex flex-col gap-4 px-8">
            <div>
                <SelectorMes mes={mes} anio={anio} onMesAnterior={onMesAnterior} onMesSiguiente={onMesSiguiente} />
            </div>
            <div className="flex gap-3">
                <TotalCards tipo="ingresos" movimientos={movimientosData} mes={mes} anio={anio} />
                <TotalCards tipo="egresos" movimientos={movimientosData} mes={mes} anio={anio} />
            </div>
            {FiltrosMovimientos(filtro, setFiltro)}
            <MovimientosList movimientos={movimientosData} mes={mes} anio={anio} filtro={filtro} />
            

        </section>
    )

}