import CarritoIcon from "../assets/icons/Carrito.svg"

export default function CarritoBtn(){
    return(
        <div className="fixed inset-x-0 bottom-24 z-[60] mx-auto max-w-[430px] px-6 flex justify-end pointer-events-none">
            <button className="pointer-events-auto w-14 h-14 bg-naranja rounded-full shadow-lg flex items-center justify-center active:opacity-90">
                <img src={CarritoIcon} className="w-6 h-6"></img>
            </button>

        </div>
    )
}
