import { useState } from "react";
import HijoCard from "../components/actividad/NiñoCard";
import OndaSaldo from "../components/home/OndaSaldo.tsx";
import ListCompras from "./ListCompras.tsx";

function Actividad() {
    const [hijoActivo] = useState<string>("Paula");

    return(
        <section className="relative flex flex-col items-center justify-center gap-1 w-full">
            
            <HijoCard/>
            <OndaSaldo className="absolute inset-0 w-full h-full z-[-4]" />
            <ListCompras hijoActivo={hijoActivo} />
            
        </section >
    );
}


export default Actividad