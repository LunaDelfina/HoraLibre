

export default function Filtros(filtroActivo:string, setFiltroActivo:(filtro:string)=>void){

    const styleBotonInactivo="border border-gris/50 text-gris font-bold py-1 px-4 rounded-xl text-sm"
    const styleBotonActivo="bg-naranja text-crema font-bold py-2 px-4 rounded-xl text-sm"
    const handleFiltroClick =(filtro:string)=>{
        setFiltroActivo(filtro)
    }

    return(
        <div className="flex gap-2">
            <button className={filtroActivo==="Todos"? styleBotonActivo:styleBotonInactivo} onClick={handleFiltroClick.bind(null, "Todos")}>Todos</button>
            <button className={filtroActivo==="Ingresos"? styleBotonActivo:styleBotonInactivo} onClick={handleFiltroClick.bind(null, "Ingresos")}>Ingresos</button>
            <button className={filtroActivo==="Egresos"? styleBotonActivo:styleBotonInactivo} onClick={handleFiltroClick.bind(null, "Egresos")}>Gastos</button>
            

        </div>
    )
}