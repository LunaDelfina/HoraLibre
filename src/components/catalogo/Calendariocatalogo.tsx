import { useState } from "react"
import type { DayProps } from "../../types/catalogo.types"

import { useCarrito } from "../../context/CarritoContext"

const diasSemana = ["Domingo", "Lun", "Mar", "Miér", "Jue", "Vie", "Sábado"]

function getSemanaActual() {
    const hoy = new Date()
    const diaSemana = hoy.getDay()
    const offsetLunes = diaSemana === 0 ? -6 : 1 - diaSemana
    const lunes = new Date(hoy)
    lunes.setDate(hoy.getDate() + offsetLunes)

    return Array.from({ length: 5 }, (_, i) => {
        const fecha = new Date(lunes)
        fecha.setDate(lunes.getDate() + i)
        return {
            dia: diasSemana[fecha.getDay()],
            numero: fecha.getDate(),
        }
    })
}


function Day({ dia, numero, seleccionado, onClick }: DayProps) {
    
    const styleSinSeleccionar="bg-white border border-gris/25 w-full rounded-lg text-gris p-2 transition-all duration-200"
    const styleSeleccionado="bg-naranja border-crema w-full rounded-lg text-crema p-2 transition-all duration-200"
    return (
        <button className={seleccionado?styleSeleccionado:styleSinSeleccionar} onClick={onClick}>
            <p className="font-semibold text-xs">{dia}</p>
            <span className="font-bold text-md">{numero}</span>

        </button>
    )
}


function Calendariocatalogo() {
    const semana = getSemanaActual()
    const hoy = new Date()
    const datosDeHoy = semana.find((item) => item.numero === hoy.getDate())
    function handleDiaSeleccionado(dia: { dia: string; numero: number }) {
        setDiaSeleccionado(dia)
        actualizarFecha(`${dia.numero}/${hoy.getMonth() + 1}/${hoy.getFullYear()}`)
    }
    const [diaSeleccionado, setDiaSeleccionado] = useState(datosDeHoy)
    const { actualizarFecha } = useCarrito()

    return (
        <section className="w-full px-8 ">
            <h1 className=" font-display font-bold text-lg text-gris">¿Cuándo entregamos el pedido?</h1>
            <div className="flex w-full gap-2 my-2">
            {semana.map((item) => (
                <Day
                    key={item.numero}
                    dia={item.dia}
                    numero={item.numero}
                    seleccionado={diaSeleccionado?.numero === item.numero}
                    onClick={handleDiaSeleccionado.bind(null, item)}
                />
            ))}
            </div>

        </section>
    )
}

export default Calendariocatalogo
