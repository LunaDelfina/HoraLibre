const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

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

function Day({ dia, numero }) {
    return (
        <div className="border-gris/50">
            <p>{dia}</p>
            <span>{numero}</span>

        </div>
    )
}


function Calendariocatalogo() {
    const semana = getSemanaActual()

    return (
        <section className="w-full p-8">
            <h1 className=" font-display font-bold text-lg text-gris">¿Cuándo entregamos el pedido?</h1>
            {semana.map((item) => (
                <Day key={item.numero} dia={item.dia} numero={item.numero} />
            ))}

        </section>
    )
}

export default Calendariocatalogo