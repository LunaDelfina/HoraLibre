import { createContext,useContext, useState, type ReactNode } from "react";
import type { ProductoProps } from "../types/catalogo.types";

type ItemCarrito = {
    producto: ProductoProps;
    cantidad: number;
}

type CarritoContextValue = {
    items: ItemCarrito[];
    agregar: (producto: ProductoProps) => void;
    sumar: (id: number) => void;
    restar: (id: number) => void;
    eliminar: (id: number) => void;
    vaciar: () => void;
    totalItems: number;
    totalPrecio: number;
    fecha: string;
    actualizarFecha: (nuevaFecha: string) => void;
}


const CarritoContext = createContext<CarritoContextValue | null>(null);

export function CarritoProvider({children}:{children:ReactNode}){
    const [items,setItems]=useState<ItemCarrito[]>([])
    function agregar(producto:ProductoProps){
        setItems((prev)=>{
            const existente= prev.find((item)=>item.producto.id===producto.id)
            if(existente){
                return prev.map((item)=>
                item.producto.id===producto.id?{...item,cantidad:item.cantidad+1}:item);
            }
            return[...prev,{producto,cantidad:1}];

        });
    }

    function sumar(id:number){
        setItems((prev)=>prev.map((item)=>
            item.producto.id===id?{...item,cantidad:item.cantidad+1}:item));
    }

    function restar(id:number){
        setItems((prev)=>prev
            .map((item)=>item.producto.id===id?{...item,cantidad:item.cantidad-1}:item)
            .filter((item)=>item.cantidad>0));
    }

    function eliminar(id:number){
        setItems((prev)=>prev.filter((item)=>item.producto.id!==id));
    }

    function vaciar(){
        setItems([]);
    }

    const totalItems=items.reduce ((suma,item)=>suma + item.cantidad,0);
    const totalPrecio=items.reduce ((suma,item)=>suma + item.producto.precio*item.cantidad,0);

    const [fecha, setFecha]=useState(new Date().toLocaleDateString());
    function actualizarFecha(nuevaFecha:string){
        setFecha(nuevaFecha);
    }

    return(
        <CarritoContext value={{items,agregar,sumar,restar,eliminar,vaciar,totalItems,totalPrecio,fecha,actualizarFecha}}>
        {children}
        </CarritoContext>
    )

}


export function useCarrito(){
    const ctx= useContext(CarritoContext);
    if (!ctx) throw new Error("useCarrito debe usarse dentro de CarritoProvider");
    return ctx;
}